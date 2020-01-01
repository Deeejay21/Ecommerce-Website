<template>
    <div>
        <div class="page-loader">
            <div class="bg-primary"></div>
        </div>

        <div class="layout-wrapper layout-2">
            <div class="layout-inner">
                <Sidebar />

                <div class="layout-container">
                    <Header />

                    <div class="layout-content">

                        <router-view></router-view>

                        <Footer />
                    </div>
                </div>
            </div>
            <div class="layout-overlay layout-sidenav-toggle"></div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Sidebar from './components/Sidebar'
    import Footer from './components/Footer'
    
    export default {
        mounted() {
            console.log('App Component is ready.')
        },

        components: {
            Header,
            Sidebar,
            Footer,
        }
    }
</script>

<style scoped>

</style>