/** Shopify CDN: Minification failed

Line 51:8 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 59:11 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 63:15 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 94:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 111:22 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 120:22 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 135:24 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 151:24 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 174:12 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 185:12 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
... and 8 more hidden warnings

**/
// jQuery CART overlay

$(document).ready(function() {
    $('.add-to-cart-button, .order-again').on('click', function(e) {
        e.preventDefault();
        var currentScroll = window.pageYOffset;
        setTimeout(function() {
            $('.cart, .cart-overlay').addClass('visible');
            $('main').addClass('faded');
            $('body').addClass('blocked');
            window.scrollTo(0, currentScroll);
        }, 500);
    });

    $('.cart-open').on('click', function(e) {
        e.preventDefault();
        $('.cart, .cart-overlay').addClass('visible');
        $('main').addClass('faded');
        var currentScroll = window.pageYOffset;
        $('body').addClass('blocked');
        window.scrollTo(0, currentScroll);
    })

    $('.cart-overlay, .close-cart').on('click', function(e) {
        e.preventDefault();
        $('.cart, .cart-overlay').removeClass('visible');
        $('main').removeClass('faded');
        $('body').removeClass('blocked');
    })
})

// VUE CART

var cart = new Vue({
    el: '.cart',
    data() {
        return {
            cart: null,
            items: 0,
            metafields: productObj,
            upsell: true
        }
    },
    created() {
        this.getCart();
    },
    methods: {
        getCart() {
            var loaded = false;
            if (loaded == false) {
                axios('/cart.js').then(function(response) {
                    cart.cart = response.data;
                    cart.items = cart.cart.item_count;
                    if (cart.items <= 3) {
                        cart.upsell = true;
                    } else {
                        cart.upsell = false;
                    }

                    response.data.items.forEach(element => {
                        if (element.handle == 'collection') {
                            console.log('collection in cart')
                            cart.upsell = false;
                        }
                    });

                    var x = document.querySelectorAll('.cart-count');
                    var i;
                    for (i = 0; i < x.length; i++) {
                        x[i].innerHTML = cart.items;
                    }

                }).catch(function(error) {
                    console.log(error);
                })
                loaded = true;
            }
        },
        addToCart(e) {
            e.preventDefault();
            var productId = store.state.product;
            if (e.target.dataset.id) {
                productId = parseFloat(e.target.dataset.id);
            }
            axios.post('/cart/add.js', {
                items: [{
                    quantity: 1,
                    id: productId
                }]
            }).then(function(response) {
                cart.getCart();
            })
        },
        removeFromCart(e) {
            var element = e.target.dataset.id;
            axios.post('/cart/change.js', {
                quantity: 0,
                id: element
            }).then(function() {
                cart.getCart();
            })
        },
        updateQuantity(e) {
            var inputQuantity = e.target.value;
            var element = e.target.dataset.id;
            axios.post('/cart/change.js', {
                quantity: inputQuantity,
                id: element
            }).then(function() {
                cart.getCart();
            }).catch(function(error) {
                $('.cart-error').html('No more in stock').addClass('visible');
                setTimeout(function() {
                    $('.cart-error').removeClass('visible');
                }, 2000);
            })
        },
        increaseQuantity(e) {
            var element = e.target.dataset.id;
            axios('/cart.js').then(function(response) {
                response.data.items.forEach(function(k, v) {
                    if (k.id == element) {
                        var elQuantity = k.quantity;
                        axios.post('/cart/change.js', {
                            quantity: elQuantity + 1,
                            id: element
                        }).then(function(response) {
                            cart.getCart();
                        })
                    }
                })
            })
        },
        decreaseQuantity(e) {
            var element = e.target.dataset.id;
            axios('/cart.js').then(function(response) {
                response.data.items.forEach(function(k, v) {
                    if (k.id == element) {
                        var elQuantity = k.quantity;
                        axios.post('/cart/change.js', {
                            quantity: elQuantity - 1,
                            id: element
                        }).then(function() {
                            cart.getCart();
                        })
                    }
                })
            })
        }
    }
})

$('.product-form').each(function() {
    var element = this
    var formElement = $(this);
    var store = new Vue({
        data() {
            return {
                state: {
                    product: element.querySelector('.id').value
                }
            }
        }
    })

    var form = new Vue({
        el: this,
        data() {
            return {
                form: {
                    id: store.state.product
                },
            }
        },
        created() {
            cart.getCart();
        },
        mounted() {
            if ($('.variant-selector').length) {
                $('.variant-selector').on('change', function() {
                    var element = $(this).val();
                    Vue.set(store.state, 'product', element);
                });
            } else {
                var element = $('.id').val();
                Vue.set(store.state, 'product', element);
            }
        },
        methods: {
            onChange() {
                Vue.set(store.state, 'product', $('.product-form').eq(index).find('select').val());
            },
            addToCart(e) {
                e.preventDefault();
                var productId = $('.id').val();
                if (typeof item !== 'undefined') {
                    _learnq.push(['track', 'Added to Cart', item]);
                } else {
                    var item = 'item_' + e.target.dataset.id;
                    _learnq.push(['track', 'Added to Cart', window[item]]);
                }


                var plan = null;
                if ($('.id').find('option:selected').data('selling-plan')) {
                    var plan = $('.id').find('option:selected').data('selling-plan');
                }

                if (e.target.dataset.id) {
                    productId = parseFloat(e.target.dataset.id);
                }
                axios.post('/cart/add.js', {
                    items: [{
                        quantity: 1,
                        id: productId,
                        selling_plan: plan

                    }]
                }).then(function(response) {
                    cart.getCart();
                }).catch(function(error) {
                    $('.cart-error').html('No more in stock').addClass('visible');
                    setTimeout(function() {
                        $('.cart-error').removeClass('visible');
                    }, 2000);
                })
            }
        }
    })
})

$('.order-again').each(function() {
    var orderAgain = new Vue({
        el: this,
        methods: {
            addToCart(e) {
                e.preventDefault();
                var elements = e.target.dataset.elements;
                var quantityElements = e.target.dataset.quantities;
                var products = elements.split(',');
                var quantities = quantityElements.split(',')

                for (var index = 0; index < products.length; index++) {
                    const addProduct = products[index];
                    const addQuantity = quantities[index];
                    axios.post('/cart/add.js', {
                        items: [{
                            quantity: addQuantity,
                            id: addProduct
                        }]
                    }).then(function(response) {
                        cart.getCart();
                    }).catch(function(error) {
                        $('.cart-error').html(error.response.data.description).addClass('visible');
                        setTimeout(function() {
                            $('.cart-error').removeClass('visible');
                        }, 2000);
                    })
                }
            }
        }
    })
})

Vue.filter('money', function(value, symbol = '£') {
    return symbol + (value / 100).toFixed(2);
})