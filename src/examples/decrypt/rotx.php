<?php

class cipher
{
 public $plainText;
 public $encodedText;
 public $rotation;
 private $englishLetterFrequencies = array(0.08167, 0.01492, 0.02782, 0.04253, 0.12702, 0.02228, 0.02015, 0.06094, 0.06966, 0.00153, 0.00772, 0.04025, 0.02406, 0.06749, 0.07507, 0.01929, 0.00095, 0.05987, 0.06327, 0.09056, 0.02758, 0.00978, 0.02360, 0.00150, 0.01974, 0.00074);

 function rotateLetter($letter) {
 $inverseRotation = (26 - $rotation);
 $upperCaseStart = ord('A');
 $upperCaseEnd = $upperCaseStart + 25;
 $upperCaseMiddle = $upperCaseEnd - $rotation;
 $lowerCaseStart = ord('a');
 $lowerCaseEnd = $lowerCaseStart + 25;
 $lowercaseMiddle = $lowerCaseEnd - $rotation;
 if ($letter <= $lowerCaseEnd) {
  if ($letter >= $lowerCaseMiddle) {
   return $letter - $inverseRotation;
  }
  if ($letter >= $lowerCaseStart) {
   return $letter + $rotation;
  }
  if ($letter <= $upperCaseEnd) {
   if ($letter >= $upperCaseMiddle) {
    return $letter - $inverseRotation;
   }
   if ($letter >= $upperCaseStart) {
    return $letter + $rotation;
   }
  }
  return $letter;
 }

 function rotateText() {
  for ($i = 0; $i < strlen($this->plainText); $i++)
   $this->encodedText .= chr(rotateLetter(ord($this->plainText{$i})));
  }
 }

 function findFrequencies() {
  for ($i = 0; $i < strlen($this->plainText); $i++) {
   $letter = ord($this->plainText{$i});
   if (($letter >= $lowerCaseStart) && ($letter <= $lowerCaseEnd)) {
    $frequencies[$letter - $lowerCaseStart]++;
   }
   else if (($letter >= $upperCaseStart) && ($letter <= $upperCaseEnd)) {
    $frequencies[$letter - $upperCaseStart]++;
   }
  }
  $letterTotal = array_sum($frequencies);
  for ($i = 0; $i < 26; $i++) {
   $frequencies[$i] /= $letterTotal;
  }
  for ($i = 1; $i < 26; $i++) {
   $frequencies[25] = array_shift($frequencies);
   for ($j = 0; $j < 26; $j++) {
    $shiftDifference[$i] += abs($englishLetterFrequencies[$j] - $frequencies[$j]);
   }
  }
  $minDifference = min($shiftDifference);
  $shiftDifferenceFlip = array_flip($shiftDifference);
  $minPosition = $shiftDifferenceFlip[$minDifference];
 }

}

?>

<?php
if (isset($_POST['Submit']))
{
 $code = new cipher();
 if ($_POST['action'] == 'encode') {
  $code->plainText = $_POST['text'];
  $code->rotation = $_POST['rotation'];
  echo $code->plainText;
 } else {
  $code->encodedText = $_POST['text'];
 }

}
?>
<form enctype="multipart/form-data" method="post" action="/node/9">
<fieldset id="rotdata">
<input type="radio" name="action" value="encode" id="encode" checked="checked" /><label for="encode">Encode</label> with <label for="ROT">ROT</label>
<select name="rotation">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13" selected="selected">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
</select>

<input type="radio" name="action" value="decode" id="decode" /><label for="decode">Decode</label>

<textarea name="text" rows="8" cols="80"></textarea>
<input type="submit" name="submit" value="Submit" />
</fieldset>
</form>
