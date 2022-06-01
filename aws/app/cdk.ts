import * as cdk from 'aws-cdk-lib'
import { ApisModule } from '../stacks/ApisModule'
import { DynamoModule } from '../stacks/DynamoModule'
import { SquadModule } from '../stacks/SquadModule'

const app = new cdk.App()

new DynamoModule(app, 'DynamoModule')

const squad = new SquadModule(app, 'SquadModule')

const api = new ApisModule(app, 'ApisModule')

api.addDependency(squad)

// new DevPipelineStack(app, 'DevPipelineStack', {
//   pipelineName: 'Dev Pipeline',
//   repoConnectionArn: '',
//   repoName: '',
//   repoBranch: 'dev',
//   env: {
//     account: '',
//     region: ''
//   }
// })

// app.synth()
