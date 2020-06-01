## Shield Platform Encryption

### Terms

#### Data Encryption
The process of applying a cryptographic function to data that results in ciphertext. The platform encryption process uses symmetric key encryption and a 256-bit Advanced Encryption Standard (AES) algorithm using CBC mode, and a randomized, 128-bit initializati​on vector (IV) to encrypt field-level data and files stored on the Salesforce Platform. Both data encryption and decryption occur on the application servers.

#### Data Encryption Keys
Shield Platform Encryption uses data encryption keys to encrypt and decrypt data. Data encryption keys are derived on the Shield Key Management Service (KMS) using keying material split between a per-release master secret and an organization-specific tenant secret stored encrypted in the database as a part of your organization. The 256-bit derived keys exist in memory until evicted from the cache.

####Encrypted Data at Rest
Data that is encrypted when persisted on disk. Salesforce supports encryption for fields stored in the database; documents stored in files, content, libraries, and attachments; search index files; Einstein Analytics datasets; and archived data.
####Encryption Key Management
Refers to all aspects of key management, such as key generation, processes, and storage. Tenant secret management is performed by administrators or users who have the “Manage Encryption Keys” permission.
####Hardware Security Module (HSM)
Used to provide cryptography processing as well as key management for authentication. Shield Platform Encryption uses HSMs to generate and store secret material and run the function that derives data encryption keys used by the encryption service to encrypt and decrypt data.
####Initialization Vector (IV)
A random sequence used with a key to encrypt data.
####Shield Key Management Service (KMS)
Generates, wraps, unwraps, derives, and secures key material. When deriving key material, the Shield KMS uses a pseudorandom number generator and input such as a password to derive keys. Shield Platform Encryption uses PBKDF2 (Password-based Key Derivation Function 2) with HMAC-SHA-256.
####Key (Tenant Secret) Rotation
The process of generating a new tenant secret and archiving the previously active one. Active tenant secrets are used for both encryption and decryption. Archived ones are used only for decryption until all data has been re-encrypted using the new, active tenant secret.
####Master HSM
The master HSM consists of a USB device used to generate secure, random secrets each Salesforce release. The master HSM is “air-gapped” from Salesforce’s production network and stored securely in a bank safety deposit box.
####Master Secret
Used in conjunction with the tenant secret and key derivation function to generate a derived data encryption key (customers can opt out of key derivation). The master secret is rotated each release by Salesforce and encrypted using the per-release master wrapping key, which is in turn encrypted with the Shield KMS’s public key so it can be stored encrypted on the file system. Only HSMs can decrypt it. No Salesforce employees have access to these keys in cleartext.
####Master Wrapping Key
A symmetric key is derived and used as a master wrapping key, also known as a key wrapping key, encrypting all the per-release keys and secrets bundle.
####Tenant Secret
An organization-specific secret used in conjunction with the master secret and key derivation function to generate a derived data encryption key. When an organization administrator rotates a key, a new tenant secret is generated. To access the tenant secret via the API, refer to the TenantSecret object. No Salesforce employees have access to these keys in cleartext.

