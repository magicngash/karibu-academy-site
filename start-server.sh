#!/bin/bash
cd /home/z/my-project
while true; do
  echo "Starting dev server at $(date)" >> /tmp/server-loop.log
  npx next dev -p 3000 2>&1 | tee /home/z/my-project/dev.log
  echo "Server exited at $(date), restarting in 2s..." >> /tmp/server-loop.log
  sleep 2
done
