#!/bin/bash

wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.8.0.2856-linux.zip
apt install unzip -y
unzip sonar-scanner-cli-4.8.0.2856-linux.zip
rm sonar-scanner-cli-4.8.0.2856-linux.zip
chmod +x sonar-scanner-4.8.0.2856-linux/bin/sonar-scanner
ls -l 
pwd

COVERAGE_OPTION=""
if [ -f coverage.out ]; then
  echo "File coverage.out found!"
  chmod 644 coverage.out
  COVERAGE_OPTION="-Dsonar.go.coverage.reportPaths=coverage.out"
else
  echo "Warning: File coverage.out not found! Code coverage analysis will be skipped."
fi

sonar-scanner-4.8.0.2856-linux/bin/sonar-scanner \
  -Dsonar.sources=. \
  -Dsonar.host.url=$SONAR_HOST_URL \
  -Dsonar.login=$SONAR_TOKEN \
  $COVERAGE_OPTION
