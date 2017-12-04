<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            <h3 class="panel-title">Panel title
                <button class="btn btn-sm btn-primary">Add Number</button>
            </h3>
        </div>
        <div class="panel-body">
            <input type="search" class="form-control">
        </div>
        <div class="panel-footer">
            <ul class="list-group">
                <li class="list-group-item">
                    added

                    <span class="badge">
                            <a href=""><span class="glyphicon glyphicon-remove"></span></a>
                        </span>
                    <span class="badge">
                            <a href=""><span class="glyphicon glyphicon-remove"></span></a>
                        </span>
                    <span class="badge">
                            <a href=""><span class="glyphicon glyphicon-remove"></span></a>
                    </span>


                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    span.badge{
        margin-left: 5%;
        background: transparent !important;
    }
</style>