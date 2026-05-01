require 'front_matter_parser'
require 'json'

POSTS_DIR = "_posts/"
OUTPUT_FILE = "_data/tag_relationships.json"

def parse_tags_from_posts
  tag_relationships = Hash.new { |hash, key| hash[key] = Set.new }

  Dir.glob("#{POSTS_DIR}/*.md").each do |file|
    parsed = FrontMatterParser::Parser.parse_file(file)

    if parsed.front_matter["tags"]
      tags = parsed.front_matter["tags"].split(" ").map(&:strip) if parsed.front_matter["tags"].is_a?(String)
      tags ||= parsed.front_matter["tags"] # Handles array format

      tags.each do |tag|
        related_tags = tags - [tag] # Exclude the current tag itself
        tag_relationships[tag].merge(related_tags)
      end
    end
  end

  puts tag_relationships.size()

  # Convert sets to arrays for JSON output
  tag_relationships.transform_values!(&:to_a)
end

def generate_json
  tag_data = parse_tags_from_posts
  File.write(OUTPUT_FILE, JSON.pretty_generate(tag_data))
  puts "Tag relationship JSON saved to #{OUTPUT_FILE}"
end

generate_json