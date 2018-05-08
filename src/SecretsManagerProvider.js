import LocalSecretsManager from './LocalSecretsManager';
import AWSSecretsManager from './AWSSecretsManager';

class SecretsManagerProvider {
    getSecretsManager() {
        const isLambda = !!(process.env.LAMBDA_TASK_ROOT || false);
        const isCodeBuild = !!(process.env.CODEBUILD_BUILD_IMAGE || false);
        const isSamLocal = process.env.AWS_SAM_LOCAL === 'true';

        if (!isSamLocal && (isLambda || isCodeBuild)) {
            return new AWSSecretsManager();
        }

        return new LocalSecretsManager();
    }
}

export default new SecretsManagerProvider();
