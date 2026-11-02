SECURITY POLICY: changelog-gen

1. Security Posture
changelog-gen reads local Git commit logs:
- Safe Subprocess Calls: Uses argument vectors and escapes commit queries.
- Zero Network Access: Operates completely locally without remote network communication.
- Safe Prepending: Writes atomically to ensure file integrity.

2. Vulnerability Reporting
- Maintainer: Dhani078
- Security Contact: dhanisepeda@gmail.com
