# -*- coding: utf-8 -*-

import os, sys, subprocess
import lib.fs as fs
import lib.utils as utils

reload(sys)
sys.setdefaultencoding('utf8')

def convertfile(filepathname):
 #print filepathname
 errorlevel = 0
 if os.path.exists(filepathname):
  if os.path.isfile(filepathname):
   baseName, fileExt = os.path.splitext(filepathname)
   currentdir = os.path.dirname(filepathname)
   #if "." + fileExt[1:].lower() in fs.ext["Videos"]["Convert"] or (useFFMPEG and fileExt.lower() in fs.ext["Videos"]["ConvertFFMPEG"]):
   if fileExt.lower() in fs.ext["Videos"]["Convert"]:
    mkvName = baseName + ".mkv"
    errorlevel = 1
    if not os.path.exists(mkvName):
     if utils.getspace(currentdir) > os.path.getsize(filepathname):
      errorlevel = 0
      subFile = baseName + fs.ext["Videos"]["Subs"]
      localname = filepathname.encode(sys.getfilesystemencoding())
      mkvlocalName = mkvName.encode(sys.getfilesystemencoding())
      subFile = subFile.encode(sys.getfilesystemencoding())
      print filepathname + " -> " + mkvName
      if os.path.exists(subFile):
       command = fs.app["MKVMerge"], '-o', mkvlocalName, localname, subFile
       ffcommand = fs.app["AVConv"], '-fflags', 'genpts', '-i', localname, '-i', subFile, '-c', 'copy', mkvlocalName
      else:
       command = fs.app["MKVMerge"], '-o', mkvlocalName, localname
       ffcommand = fs.app["AVConv"], '-fflags', 'genpts', '-i', localname, '-c', 'copy', mkvlocalName
       #errorlevel = int(subprocess.call([fs.app["MKVMerge"], '-o'.encode(sys.getfilesystemencoding()), mkvlocalName, localname]))
       #command = fs.app["MKVMerge"] + ' -S -o "' + mkvName + '" "' + filename + '"' # Remove Subtitles
       #command = fs.app["MKVMerge"] + ' -a 1 -o "' + mkvName + '" "' + filename + '"' # Only audio track 1
       #command = fs.app["MKVMerge"] + ' -o '"' + mkvName + ' -o '"' & mkvName + '" --aspect-ratio 0:16/9 "' + file.name + '"' # Change aspect ratio to 16:9
      if test:
       print command
      else:
       #command = [c.encode(sys.getfilesystemencoding()) for c in command]
       #print "AVI: " + filepathname + " - " + str(os.path.getsize(filepathname))
       #print "MKV: " + mkvName + " - " + str(os.path.getsize(mkvName))
       #print "Free Space: " + str(utils.getspace(currentdir))
       errorlevel = int(subprocess.call(command))
       print "Errorlevel: " + str(errorlevel)
       if errorlevel != 0:
        errorlevel = int(subprocess.call(ffcommand))
        print "Errorlevel: " + str(errorlevel)
       deletablefile = ""
       if errorlevel == 0:
        if os.path.exists(mkvName) and os.path.exists(filepathname):
         if os.path.getsize(mkvName) > os.path.getsize(filepathname) * 0.8 and os.path.getsize(mkvName) < os.path.getsize(filepathname) * 1.1 and utils.getspace(currentdir) > 16777216:
          if deleteAVI:
           deletablefile = filepathname
         else:
          if deleteMKV:
           deletablefile = mkvName
       else:
        if os.path.exists(mkvName) and os.path.exists(filepathname) and deleteMKV:
         deletablefile = mkvName
       utils.deletefile(deletablefile)
     else:
      #print str(utils.getspace(currentdir)) + " < " + str(os.path.getsize(filepathname))
      print "No free space: " + filepathname
    else:
     print "MKV exists: " + filepathname
#   else:
#    print "Not a movie: " + filepathname
#  else:
#   print "Not a file: " + filepathname
# else:
#  print "No file: " + filepathname
 return errorlevel

def convertfiles(currentdir, errorlevel):
 dirslash = os.path.join(currentdir, "x")[:-1]
 for filename in os.listdir(currentdir):
  filepathname = dirslash + filename
  if os.path.isdir(filepathname):
   if recursive:
    errorlevel += int(convertfiles(filepathname, errorlevel))
  else:
   errorlevel += int(convertfile(filepathname))
 return errorlevel

recursive = False
test = False
deleteMKV = False
deleteAVI = True

errorlevel = 0
if len(sys.argv) > 1:
 recursive = True
 for file in sys.argv[1:]:
 #for file in [unicode(x, "cp850") for x in sys.argv[1:]]:
  file = file.decode(sys.stdin.encoding)
  if os.path.exists(file):
   if os.path.isdir(file):
    errorlevel += int(convertfiles(file, 0))
   else:
    errorlevel += int(convertfile(file))
  else:
   print "Doesn't exist: " + file
else:
 rootdir = os.getcwd().decode(sys.getfilesystemencoding())
 errorlevel += int(convertfiles(rootdir, 0))

if errorlevel:
 raw_input("Errorlevel " + str(errorlevel) + ". Press ENTER to continue")
