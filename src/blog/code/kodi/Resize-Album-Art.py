import os, sys
from PIL import Image, ImageFile
ImageFile.MAXBLOCK = 4096*4096
import lib.fs as fs

ImageName = "folder.jpg"
minSize = 1000
maxSize = 1800
#aspectMargin = [0.95, 1.05]
aspectMargin = [0.95, 1.05]

def convertfile(filepathname):
	errorlevel = 0
	if os.path.exists(filepathname):
		if os.path.isfile(filepathname):
			filepath = filepathname.split(os.sep)
			filename = filepath[-1]
			if filepath[-1].lower() == ImageName:
				#folder = filepath[-3] + ", " + filepath[-2] + ", " + filepath[-1]
				folder = os.sep.join(filepath[7:])
				im = Image.open(filepathname)
				side = int(round((im.size[0] + im.size[1]) / 2, -2))
				size = (side, side)
				if size[0] > maxSize:
					size = (maxSize, size[1])
				if size[1] > maxSize:
					size = (size[0], maxSize)
				if size[0] < minSize:
					print "Too Small: %s, %s" % (im.size, folder)
					errorlevel = 1
				if im.size == size:
					#print "Okay:    %s, %s" % (im.size, folder)
					#return 0
					pass
				elif im.size[0] == im.size[1] or aspectMargin[0] < im.size[0]/float(im.size[1]) < aspectMargin[1]:
					print "Resized:   %s -> %s, %s" % (im.size, size, folder)
					im = im.resize(size, Image.ANTIALIAS)
					im.save(filepathname, quality = 80, optimize = 1)
				else:
					print 'Bad Ratio: %s %s' % (im.size, folder)
					#return 1
					errorlevel = 1
				if filename != ImageName:
					print "Renamed:   %s %s -> %s" % (folder, filename, ImageName)
					os.rename(filepathname, filepathname[:-10] + ImageName)
	return errorlevel

def convertfiles(currentdir):
	errorlevel = 0
	#if not os.path.exists(os.path.join(currentdir, "folder.jpg")):
		#filepath = currentdir.split(os.sep)
		#folder = os.sep.join(filepath[7:])
		#errorlevel += 1
		#print "Missing:   %s" % (folder)
	dirslash = os.path.join(currentdir, "x")[:-1]
	for filename in os.listdir(currentdir):
		filepathname = dirslash + filename
		if os.path.isdir(filepathname):
			errorlevel += convertfiles(filepathname)
		else:
			errorlevel += convertfile(filepathname)
	return errorlevel

errorlevel = 0
for alpha in os.listdir(fs.path("os", "Artists")):
	alphafolder = os.path.join(fs.path("os", "Artists"), alpha)
	if os.path.isdir(alphafolder):
		for artist in os.listdir(alphafolder):
			artistfolder = os.path.join(alphafolder, artist)
			if os.path.isdir(artistfolder):
				artistimage = os.path.join(artistfolder, "folder.jpg")
				if os.path.isfile(artistimage):
					im = Image.open(artistimage)
					if im.size != (1000, 1000):
						print "Bad Size:  %s, %s" % (im.size, artist)
						errorlevel += 1
				else:
					print "Missing:   %s" % (artist)
					errorlevel += 1
				for album in os.listdir(artistfolder):
					albumfolder = os.path.join(artistfolder, album)
					if os.path.isdir(albumfolder):
						albumimage = os.path.join(albumfolder, "folder.jpg")
						if not os.path.exists(albumimage):
							print "Missing:   %s" % (os.path.join(artist, album))
							errorlevel += 1
						errorlevel += convertfiles(albumfolder)
convertfiles(fs.path("os", "Various"))


print "%s issues" % (errorlevel)
