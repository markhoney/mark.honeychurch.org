/**
*
*  Entropy pool from Mouse Movements for Javascript
*  Requires function SHA256(string) to be defined elsewhere
*  Tracks mouse movements on the page, feeds a 256-bit entropy pool from this,
*  reports available bits of entropy on demand and withdraws entropy via random integer function.
*  Also calls caller-defined function "window.UpdateEntropy" if it exists, whenever the pool is changed.
*
*  WARNING: As of 2012-02-18 this algorythm has not been reviewed by any serious cryptographers.
*  I'm just a newb ameture. :P  Still I have every reason to believe this method is significantly
*  more secure than either Math.random() or passing entropy over a cleartext network connection,
*  assuming the javascript runtime environment itself is not being eavesdropped.
*
*  This work is dedicated to the public domain under Creative Commons CC0
*  http://creativecommons.org/publicdomain/zero/1.0/
*
*  Author: Jesse Thompson, 2012-02-18 jesset@gmail.com
*
**/

if(document.captureEvents) { document.captureEvents(Event.MOUSEMOVE); }
document.onmousemove = MouseMove;

window.entropy_pool = '';
window.entropy_bits = 0;

// This constant is kind of arbitrary.
// How many fractional bits of entropy do I think one mouse position and millisecond sample has added to the pool?
BITS_PER_SAMPLE = 0.2; 

// 2^48 = 0x1000000000000 = (dec)281474976710656, max must be less than this.
MAXMAX = 0x1000000000000;

// Add entropy to the pool with every mouse movement
function MouseMove(e)
{
  // IE-centric hack.. if "e" is undefined, fudge in "event" object properties. I don't have to align them
  // with the corner of the screen, because abs values don't matter just how different they are from the last
  // values. Their "unpredictability".
  if(e==null) { e = {"pageX": event.clientX, "pageY": event.clientY}; }

  window.entropy_pool = SHA256(window.entropy_pool + (new Date).getMilliseconds() +':'+ e.pageX +':'+ e.pageY);
  window.entropy_bits += BITS_PER_SAMPLE;
  if(window.entropy_bits > 256) { window.entropy_bits = 256; } // Can't have more entropy than the pool will hold
  if(window.UpdateEntropy) { UpdateEntropy(); }
}

// Determines how many bits the integer "max" represents, fractional.
// Feed into Math.ceil() if you need to round this up to a whole number of bits.
// or Math.floor() to round down. Most of my calculations are perfectly
// happy with fractional measurements of abstract bit measurements. :J
function BitsPerMax(max) { return Math.log(max)/Math.log(2); }

// Attempt to withdraw entropy from the pool by requesting a random integer 0 <= result < max.
// max must be less than or equal to 2^48 (MAXMAX) to help keep JS integer oprations clean.
// make multiple withdrawals if you require more entropy than that.
// NOTE: this code is not re-entrant safe. Do not call from multiple threads simultaneously.
function ERandom(max)
{
  // cleanse max, rounding it if it's fractional and zeroing or NaNing it if it's non-integer.
  max = Math.floor(parseInt(max));

  var withdraw_bits = BitsPerMax(max);

  if(max<2 || isNaN(max)) { throw "'max' must be an integer > 1"; }
  if(withdraw_bits > 48) { throw "Cannot withdraw more than 48 bits of entropy per transaction; make max < "+ MAXMAX; }
  if(withdraw_bits > window.entropy_bits) { throw "Not enough entropy in the pool"; }
  
  // record loss of entropy
  window.entropy_bits -= withdraw_bits;

  if(window.UpdateEntropy) { UpdateEntropy(); }

  // calculate the result we'll return; then use it to help stir the pool.
  // To be clear, we are converting the first 12 nibbles of the pool into an integer, and moduloing that into max.
  //
  // Also, throw the result back and stir again in the edge case
  // where the remainder lies within an incomplete divisor. Taking that precaution
  // nullifies any bias in modulo base conversion statistics.
  //
  // For example, boiling a random number 0 <= x < 10 down to 0 <= y < 4 using y = x % 4
  // gives a 33% bonus to the results "0" and "1", because out of the moduli starting at
  // 4*2, only the first two are represented before you hit the limit of ten.
  // By throwing back any result where floor(x/4) >= floor(10/4), that bias
  // is concisely eliminated.

  do {
    var result = parseInt("0x"+ window.entropy_pool.substr(0,12)) % max;
    window.entropy_pool = SHA256(window.entropy_pool + result);
  } while(Math.floor(parseInt("0x"+ window.entropy_pool.substr(0,12)) / max) >= Math.floor(MAXMAX / max));

  return(result);
}
