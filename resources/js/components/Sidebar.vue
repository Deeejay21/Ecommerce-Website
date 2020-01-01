<template>
    <div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical bg-dark">
        <!-- Brand demo (see assets/css/demo/demo.css) -->
        <div class="app-brand demo">
            <span class="app-brand-logo demo">
                <img src="assets/img/logo.png" alt="Brand Logo" class="img-fluid">
            </span>
            <a href="index-2.html" class="app-brand-text demo sidenav-text font-weight-normal ml-2">Bhumlu</a>
            <a href="javascript:" class="layout-sidenav-toggle sidenav-link text-large ml-auto">
                <i class="ion ion-md-menu align-middle"></i>
            </a>
        </div>
        <div class="sidenav-divider mt-0"></div>

        <!-- Links -->
        <ul class="sidenav-inner py-1">

            <!-- Dashboard -->
            <li class="sidenav-item open active">
                <router-link to="/admin" class="sidenav-link">
                    <i class="sidenav-icon feather icon-home"></i>
                    <div>Dashboard</div>
                </router-link>
            </li>

            <!-- Categories -->
            <li class="sidenav-item">
                <router-link to="/admin/categories" class="sidenav-link">
                    <i class="sidenav-icon feather icon-home"></i>
                    <div>Categories</div>
                </router-link>
            </li>

            <!-- Products -->
            <li class="sidenav-item">
                <router-link to="/admin/products" class="sidenav-link">
                    <i class="sidenav-icon feather icon-home"></i>
                    <div>Products</div>
                </router-link>
            </li>
            <li class="sidenav-item">
                <a href="javascript:" class="sidenav-link sidenav-toggle">
                    <i class="sidenav-icon feather icon-layers"></i>
                    <div>Sales</div>
                </a>
                <ul class="sidenav-menu">
                    <li class="sidenav-item">
                        <router-link to="/admin/sales/daily" class="sidenav-link">
                            <div>Daily</div>
                        </router-link>
                    </li>
                    <li class="sidenav-item">
                        <router-link to="/admin/sales/monthly" class="sidenav-link">
                            <div>Monthly</div>
                        </router-link>
                    </li>
                    <li class="sidenav-item">
                        <router-link to="/admin/sales/yearly" class="sidenav-link">
                            <div>Yearly</div>
                        </router-link>
                    </li>
                </ul>
            </li>

            <!-- Pages -->
            <li class="sidenav-divider mb-1"></li>
            <li class="sidenav-header small font-weight-semibold">Pages</li>
            <li class="sidenav-item">
                <a href="javascript:" class="sidenav-link sidenav-toggle">
                    <i class="sidenav-icon feather icon-lock"></i>
                    <div>Authentication</div>
                </a>
                <ul class="sidenav-menu">
                    <li class="sidenav-item">
                        <a href="javascript:" class="sidenav-link sidenav-toggle">
                            <div>Login</div>
                        </a>
                        <ul class="sidenav-menu">
                            <li class="sidenav-item">
                                <a href="pages_authentication_login-v1.html" class="sidenav-link">
                                    <div>Login v1</div>
                                </a>
                            </li>
                            <li class="sidenav-item">
                                <a href="pages_authentication_login-v2.html" class="sidenav-link">
                                    <div>Login v2</div>
                                </a>
                            </li>
                            <li class="sidenav-item">
                                <a href="pages_authentication_login-v3.html" class="sidenav-link">
                                    <div>Login v3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="sidenav-item">
                        <a href="javascript:" class="sidenav-link sidenav-toggle">
                            <div>Signup</div>
                        </a>
                        <ul class="sidenav-menu">
                            <li class="sidenav-item">
                                <a href="pages_authentication_register-v1.html" class="sidenav-link">
                                    <div>Register v1</div>
                                </a>
                            </li>
                            <li class="sidenav-item">
                                <a href="pages_authentication_register-v2.html" class="sidenav-link">
                                    <div>Register v2</div>
                                </a>
                            </li>
                            <li class="sidenav-item">
                                <a href="pages_authentication_register-v3.html" class="sidenav-link">
                                    <div>Register v3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="sidenav-item">
                        <a href="pages_authentication_login-and-register.html" class="sidenav-link">
                            <div>Login + Register</div>
                        </a>
                    </li>
                    <li class="sidenav-item">
                        <a href="pages_authentication_lock-screen-v1.html" class="sidenav-link">
                            <div>Lock screen v1</div>
                        </a>
                    </li>
                    <li class="sidenav-item">
                        <a href="pages_authentication_lock-screen-v2.html" class="sidenav-link">
                            <div>Lock screen v2</div>
                        </a>
                    </li>
                    <li class="sidenav-item">
                        <a href="pages_authentication_password-reset.html" class="sidenav-link">
                            <div>Password reset</div>
                        </a>
                    </li>
                    <li class="sidenav-item">
                        <a href="pages_authentication_email-confirm.html" class="sidenav-link">
                            <div>Email confirm</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="sidenav-item">
                <a href="javascript:" class="sidenav-link sidenav-toggle">
                    <i class="sidenav-icon feather icon-shopping-cart"></i>
                    <div>E-commerce</div>
                </a>
                <ul class="sidenav-menu">
                    <li class="sidenav-item">
                        <a href="pages_e-commerce_product-list.html" class="sidenav-link">
                            <div>Product list</div>
                        </a>
                    </li>
                    <li class="sidenav-item">
                        <a href="pages_e-commerce_product-item.html" class="sidenav-link">
                            <div>Product item</div>
                        </a>
                    </li>
                    <li class="sidenav-item">
                        <a href="pages_e-commerce_product-edit.html" class="sidenav-link">
                            <div>Product edit</div>
                        </a>
                    </li>
                    <li class="sidenav-item">
                        <a href="pages_e-commerce_order-list.html" class="sidenav-link">
                            <div>Order list</div>
                        </a>
                    </li>
                    <li class="sidenav-item">
                        <a href="pages_e-commerce_order-detail.html" class="sidenav-link">
                            <div>Order detail</div>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Sidebar Component is ready.')
        },
    }
</script>

<style scoped>

</style>