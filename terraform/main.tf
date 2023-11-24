resource "digitalocean_droplet" "portfolio" {
  count = 1
  image = "debian-11-x64"
  name = "portfolio-${count.index}"
  region = "sgp1"
  size = "s-1vcpu-512mb-10gb"

  ssh_keys = [
    data.digitalocean_ssh_key.Alexvm.id
  ]

    connection {
    host = self.ipv4_address
    user = "root"
    type = "ssh"
    private_key = file(var.pvt_key)
    timeout = "2m"
  }

    provisioner "local-exec" {
                command = "until nc -zv '${self.ipv4_address}' 22; do sleep 1; done; echo 'SSH port open' && ansible-playbook -u root -i '${self.ipv4_address},' --private-key ${var.pvt_key} -e @/home/alex/Desktop/portfolio-website/terraform/dockerhub_login.yml /home/alex/Desktop/portfolio-website/playbook.yml"

    }
}

output "drop_ip_addresses" {
    value = {
        for droplet in digitalocean_droplet.portfolio:
        droplet.name => droplet.ipv4_address
    }
}
