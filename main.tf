provider "aws" {
  region = "us-east-1"
}


variable "intances" { 
  type = map(object({
    ami = string,
    instance_type = string

  })
  )

  default = {
    "instance1" = {
      ami           = "ami-0abcdef1234567890" 
    }
    "instance2" = {
      ami           = "ami-0fedcba9876543210" 
      instance_type = "t2.micro"
    }
  }
}


resource "aws_instance" "example" {
  for_each = var.intances
  ami = each.value.ami
  instance_type = each.value.instance_type

tags = {
    Name = each.kkey
}
}
