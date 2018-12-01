export interface S3ScannerOptions {
	// File extension to filter on
	extension?: string;
	// Limit of keys to be returned
	limit?: number;
	// Indicates where you want S3 to start listing from
	startFrom?: string;
	// Paging token
	continuationToken?: string;
}

export interface Scan {
	listObjects(bucket: string, opts: S3ScannerOptions): any;
}
