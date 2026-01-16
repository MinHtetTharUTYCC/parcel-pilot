import { randomBytes } from 'crypto';

export function generatePickupCode() {
	const ranB = randomBytes(3);
	const hexed = ranB.toString('hex').toUpperCase();
	return `CONDO-${hexed}`;
}

//for email
export const getFilenameFromUrl = (url: string): string => {
	const ext = url.split('.').pop()?.toLowerCase() || 'jpg';
	return `parcel.${ext}`;
};
export const isValidUrl = (url: string | null | undefined): boolean => {
	if (!url) return false;
	try {
		const parsed = new URL(url);
		return parsed.protocol === 'http:' || parsed.protocol === 'https:';
	} catch {
		return false;
	}
};
