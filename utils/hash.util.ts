import Crypto from "crypto";

function getShortHash(s: string) {
    const hash = Crypto.getHashes();
    return Crypto.createHash('sha1')
        .update(s)
        .digest('hex')
}

export {
    getShortHash,
}