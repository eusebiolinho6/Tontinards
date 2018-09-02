lsof -n -i4TCP:3001 | grep LISTEN | awk '{ print $2 }' | xargs kill
ROOT_URL="http://localhost:3001" nohup meteor --production -p 3001 >meteor.log 2>meteor.error.log &
