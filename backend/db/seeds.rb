# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

menuItem_a = MenuItem.create(name: "Chicken Wings", category: "Entree", description: "Fried and crispy, tossed in your favorite sauce and served with ranch.", price: 7.00, image_url: "https://dvy74lhrv6zie.cloudfront.net/crKxCz7HjaUzrb4XRfrV9uPUZ3-qTMO_rNQF5zn89oU/fit/800/800/no/0/aHR0cHM6Ly9jbHVzdGVydHJ1Y2stcHJkLnMzLmFtYXpvbmF3cy5jb20vYXNzZXRzLzQyODc2MTY2LTgxOTQtMTFlOC05ZTE4LTdiZDg5MTRhMWM2ZV93aW5nc19iYnEub3JpZ2luYWwuanBnPzE1MzA5MzM0NDA.jpg")
menuItem_b = MenuItem.create(name: "Chips and Dip", category: "Starter", description: "Home-made chips and a trio of dips including salsa, queso, and artichoke.", price: 4.00, image_url: "https://dvy74lhrv6zie.cloudfront.net/HamSp4yShY4C2cSobOfEmG1eEswvsXA64Kzt3V4yw2E/fit/800/800/no/0/aHR0cHM6Ly9jbHVzdGVydHJ1Y2stcHJkLnMzLmFtYXpvbmF3cy5jb20vYXNzZXRzLzJkNjg4ZWIyLTgxOTUtMTFlOC05NTMwLTUzZGVmODRkNWZlOF9zaWRlc19jaGlwcy1hbmQtc2Fsc2Eub3JpZ2luYWwuanBnPzE1MzA5MzM4MzQ.jpg")
menuItem_c = MenuItem.create(name: "Pizza", category: "Entree", description: "Our pie's are to die for. We hand-toss the dough and add our special saucy spizaz!", price: 9.00, image_url: "https://dvy74lhrv6zie.cloudfront.net/2iiksMegRJp-jStBlcTT_ztZcbRsL1J0BFD5vT5jf80/fit/800/800/no/0/aHR0cHM6Ly9jbHVzdGVydHJ1Y2stcHJkLnMzLmFtYXpvbmF3cy5jb20vYXNzZXRzLzdhNWE1ZThjLTAxYTktMTFlOS04MWI2LWMzZGU3ZTc3MzFmMF8yMDE4MTEwNV8tX1JFU0laRURfTXVzaHJvb21fUGl6emFfY29weS5vcmlnaW5hbC5qcGc_MTU0NTAxNjMwMg.jpg")
menuItem_d = MenuItem.create(name: "Beer", category: "Beverages", description: "Brewed fresh in house, pick from our many flavors.", price: 2.50, image_url: "https://dvy74lhrv6zie.cloudfront.net/OPPJD_C7jouiEAzduQ_3vh395dVxeL6rijeomdtFIk8/fit/800/800/no/0/aHR0cHM6Ly9jbHVzdGVydHJ1Y2stcHJkLnMzLmFtYXpvbmF3cy5jb20vYXNzZXRzLzg1ODc0ZWJhLWE5ODctMTFlOS04OGI0LTEzMTcxNjc1MzY2Yl9UZWFrb2VfUGVhcl9HYXJkZW5fTWludF8yMDE5MDcxOC5vcmlnaW5hbC5wbmc_MTU2MzQ3MzUxMw.jpg")
 
user_a = User.create(name: "Frank", address: "600 Pennsylvania St., Denver, CO, 80203", email:"test_a@test.com" )
user_b = User.create(name: "Miranda", address: "13780 Del Corso Way, Broomfield, CO, 80020", email:"test_a@test.com" )
user_c = User.create(name: "Tony", address: "616 Saffron Way, Grand Junction, CO, 81505", email:"test_a@test.com" )
 
cart_a = Cart.create(menu_item: menuItem_a, user: user_a, is_order: false)
cart_a = Cart.create(menu_item: menuItem_b, menu_item: menuItem_d, user: user_b, is_order: true)
cart_a = Cart.create(menu_item: menuItem_c, user: user_c, is_order: false)