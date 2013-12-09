# slim style
require 'slim'
Slim::Engine.set_default_options :pretty => true, :disable_escape => true, :format => :html5

the_hold_options = {
  :login => "evenwu", # 你的帳號
  :token => "229f2b40d4f17f98f142318250a75f20", # 你的密碼
  :project => "pts2013", # 專案名稱, 會變成 http://your-project-name.evenwu.the-hold.handlino.com/
  #:project_site_password => "ptsdesign", # 密碼，這一行拿掉的話就沒有密碼
  :host => "http://the-hold.handlino.com/",
  :cname => "ptsdemo.evendesign.tw"
}

preferred_syntax = :scss

css_dir = "stylesheets" # by Fire.app
sass_dir = "sass" # by Fire.app
images_dir = "images" # by Fire.app
javascripts_dir = "javascripts" # by Fire.app
fireapp_coffeescripts_dir = "coffeescripts" # by Fire.app
fireapp_livescripts_dir = "livescripts" # by Fire.app
fireapp_minifyjs_on_build = false # by Fire.app
fireapp_always_report_on_build = false # by Fire.app
relative_assets = false # by Fire.app
line_comments = false # by Fire.app
sass_options = {:debug_info=>false} # by Fire.app
fireapp_coffeescript_options = {:bare=>false} # by Fire.app
fireapp_livescript_options = {:bare=>false} # by Fire.app

output_style = :expanded # by Fire.app
