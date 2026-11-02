BENCHMARKS: changelog-gen

Testing Environment:
- Platform: Node.js v20.12.0 LTS / Windows 10
- Processor: AMD Ryzen 5 3550H (4 Cores, 8 Threads)

1. Execution Speed Comparison (500 Recent Commits)

Tool | Execution Time | Memory RSS | External Dependencies
--- | --- | --- | ---
changelog-gen (native) | 18 ms | 20 MB | 0 dependencies
standard-version | 620 ms | 95 MB | 45 dependencies
conventional-changelog-cli | 480 ms | 82 MB | 36 dependencies

2. Throughput
- Commit message parsing throughput: 45,000 commits per second.
- Markdown generation time: 2 milliseconds.
