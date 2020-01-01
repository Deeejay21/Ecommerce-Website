<template>
    <div class="container-fluid flex-grow-1 container-p-y">
        <h4 class="font-weight-bold py-3 mb-0">Monthly Sales</h4>
        <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/admin"><i class="feather icon-home"></i></router-link></li>
                <li class="breadcrumb-item active">Sales</li>
                <li class="breadcrumb-item"><router-link to="/admin/sales/monthly">Monthly</router-link></li>
            </ol>
        </div>
        
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Monthly Component is ready.')
        },
    }
</script>

<style scoped>

</style>