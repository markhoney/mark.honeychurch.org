namespace CoverSources
import System
import System.Text
import System.Text.RegularExpressions
import util

class DiscogsArtist:
 static SourceName as string:
  get: return "Discogs Artist"
 static SourceCreator as string:
  get: return Mark Honeychurch
 static SourceVersion as string:
  get: return "0.1"
 static def GetThumbs(coverart,artist,album):
  query as string = album
  query.Replace(' ','+')

  //Get the image results
  imageResults = GetPage(String.Format("http://www.discogs.com/viewimages?artist={0}", EncodeUrl(query)))

  imageRegex = Regex("<img src="\" url="" />http://www\\.discogs\\.com/image/A-\\d+-\\d+.(?:jpe?g|gif|png))\" width=\"(?<width>\\d+)\" height=\"(?<height>\\d+)\"")
  imageMatches = imageRegex.Matches(imageResults)

  coverart.EstimatedCount += imageMatches.Count - 1 //Adjust count by how many images for this release

  for imageMatch as Match in imageMatches:
   coverart.Add(imageMatch.Groups["url"].Value, artist, Int32.Parse(imageMatch.Groups["width"].Value), Int32.Parse(imageMatch.Groups["height"].Value), null)

 static def GetResult(param):
  return param
