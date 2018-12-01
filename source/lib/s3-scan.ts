import * as aws from 'aws-sdk';
import throttle from 'p-throttle';
import {Scan, S3ScannerOptions} from './interface';

const S3 = new aws.S3();

/**
 * Wrapper function to
 *
 * @param Bucket
 * @param MaxKeys
 * @param ContinuationToken
 * @param StartAfter
 */
const s3ListObjects = (Bucket: string, MaxKeys: number, ContinuationToken: string, StartAfter: string) => {
	return S3.listObjectsV2({Bucket, MaxKeys, ContinuationToken, StartAfter}).promise();
};

const getObjects = throttle(s3ListObjects, 1000, 1);

export class S3Scanner implements Scan {
	/**
	 * List objects from S3
	 *
	 * @param bucket - Bucket name
	 * @param opts - Search options
	 */
	async listObjects(bucket: string, opts: S3ScannerOptions) {

	}
}
