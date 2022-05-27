import * as cdk from 'aws-cdk-lib'
import { DevPipelineStack } from '../pipelines/dev-pipeline-stack'

const app = new cdk.App()

new DevPipelineStack(app, 'DevPipelineStack', {
  pipelineName: 'Dev Pipeline',
  repoConnectionArn: '',
  repoName: '',
  repoBranch: 'dev',
  env: {
    account: '',
    region: ''
  }
})

app.synth()
