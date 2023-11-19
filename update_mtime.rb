require 'json'
require 'date'


# make sure times are corerct in repos
# `git restore-mtime`


mtime_data = {}

Dir.glob('_posts/**/*.md') do |file|
  # filename = File.basename(file)
  mtime = File.mtime(file).utc
  mtime_data[file] = mtime
end

json_data = JSON.pretty_generate(mtime_data)

File.open('_data/mtime.json', 'w') do |json_file|
  json_file.puts json_data
end
