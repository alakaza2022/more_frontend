terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0.0"
    }
  }
}

terraform {
  backend "azurerm" {
    storage_account_name = "popoutboprodweublob"
    container_name       = "terraform"
    resource_group_name = "rg-popout-back-office-we"
    key                  = "fronent.tfstate"
  }
}

variable "image_name" {}


provider "azurerm" {
  features {}
}
resource "azurerm_resource_group" "more_frontend_resource_group" {
  name     = "rg-more-webapp-frontend-we"
  location = "West Europe"
}

resource "azurerm_app_service_plan" "more_frontend_service_plan" {
  name                = "plan-more-webapp-frontend-we"
  location            = azurerm_resource_group.more_frontend_resource_group.location
  resource_group_name = azurerm_resource_group.more_frontend_resource_group.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Basic"
    size = "B1"
  }


}

resource "azurerm_app_service" "more_app_service_front" {
  name                = "app-more-webapp-fronent-we"
  location            = azurerm_resource_group.more_frontend_resource_group.location
  resource_group_name = azurerm_resource_group.more_frontend_resource_group.name
  app_service_plan_id = azurerm_app_service_plan.more_frontend_service_plan.id

  site_config {
    always_on        = true
    linux_fx_version = "DOCKER|${var.image_name}"
  }

    app_settings = {
    DOCKER_REGISTRY_SERVER_PASSWORD            = "3kRq4t44Hm1VGVGeKrqWJMXL=uywsQJP"
    DOCKER_REGISTRY_SERVER_URL                 = "https://crwebappprodwe.azurecr.io"
    DOCKER_REGISTRY_SERVER_USERNAME            = "crwebappprodwe"
    WEBSITES_PORT                               = "3000"
    HOST                                        = "https://app-more-webapp-backend-we.azurewebsites.net"
  }
}
