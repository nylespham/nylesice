provider "aws" {
  region = "ap-southeast-1"
}

resource "aws_s3_bucket" "nylesice" {
  bucket = "nylesice-bucket-${ramdom}"
  tags = {
    Name    = aws_s3_bucket.nylesice.bucket
    Project = "Nyles' Portfolio"
  }

}
