variable "region" {
  default     = "us-east-1"
  description = "Region of AWS"
}

variable "kubeconfig_path" {
}

variable "ingress_client_host" {
}

variable "ingress_api_host" {
}

variable "ingress_tls_secret_name" {
}
