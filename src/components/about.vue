<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <b-card title="123k.work"
                        img-src="../img/img_1670.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                    <p class="card-text">
                        My static homepage. I use it for frontend experiments. Nice that you came along although
                        you most probably won't find something useful here.
                    </p>
                </b-card>
            </div>
            <div class="col-md-4">
                <b-card title="123k.org"
                        img-src="../img/img_1834.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                    <p class="card-text">
                        My very personal bike-track homepage. I already use it for several years
                        and still like to improve it during the winter season. Also with flickr photos!
                    </p>
                    <b-button href="https://123k.org" variant="primary">Visit</b-button>
                </b-card>
            </div>
            <div class="col-md-4">
                <b-card title="123k.pl"
                        img-src="../img/img_2340.jpg"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                    <p class="card-text">
                        My personal blog where I write about the development of the 123k projects
                    </p>
                    <b-button href="https://123k.pl" variant="primary">Visit</b-button>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
 .container-fluid{
     padding: 15px;
 }
</style>