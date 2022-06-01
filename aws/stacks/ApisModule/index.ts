import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { ApisModuleApis } from './infra/apis'

export class ApisModule extends Stack {
  constructor(app: Construct, name: string, props?: StackProps) {
    super(app, name, props)
    new ApisModuleApis(this, 'Apis')
  }
}
