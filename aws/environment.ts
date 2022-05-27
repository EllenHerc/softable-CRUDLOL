const production = true

class EnvironmentHomologation {
  ID = 'dev'
  ACCOUNT = ''
  REGION = 'us-east-1'
  ENVIRONMENT = 'Homologation'
}

class EnvironmentProduction {
  ID = 'prod'
  ACCOUNT = ''
  REGION = 'us-east-1'
  ENVIRONMENT = 'Production'
}

export const environment = production
  ? new EnvironmentProduction()
  : new EnvironmentHomologation()
