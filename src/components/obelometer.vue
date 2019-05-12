<template>
    <div class="row">
        <div class="col-md-5">
            <canvas ref="obelometer-canvas" width="500" height="700"></canvas>
        </div>
        <div class="col-md-7">
            <div class="obelometer-display">
                <h2>Office Temperature</h2>
                <span class="temp-display">{{tempMsg.temperature.value}}&deg;</span>
                <span class="time-display">{{tempMsg.time | formatDate }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import PahoMQTT from 'paho.mqtt.js'
    import {Obelometer} from "../obelometer";


    export default {
        name: "obelometer",
        data() {
            return {
                obelometer: null,
                mqttClient: null,
                tempMsg: null,
            }
        },
        created() {
            this.tempMsg = {
                "location": {"name": "office"},
                "temperature": {"value": 0.0},
                "time": ""
            };

            this.mqttClient = new PahoMQTT.Client("m24.cloudmqtt.com", 33555, "wazka_" + parseInt(Math.random() * 100, 10));
            // set callback handlers
            this.mqttClient.onConnectionLost = this.onConnectionLost;
            this.mqttClient.onMessageArrived = this.onMessageArrived;
            var options = {
                useSSL: true,
                userName: "sbeekshn",
                password: "cGZmqlkt7aeE",
                onSuccess: this.onConnect,
                onFailure: this.doFail
            };
            // connect the client
            this.mqttClient.connect(options);
        },
        mounted() {
            this.obelometer = new Obelometer(this.$refs['obelometer-canvas']);
        },
        methods: {
            onConnect() {
                this.mqttClient.subscribe("temp-stream");
            },
            doFail(e) {
                console.log(e);
            },
            onConnectionLost(responseObject) {
                if (responseObject.errorCode !== 0) {
                    console.log("onConnectionLost:" + responseObject.errorMessage);
                }
            },
            onMessageArrived(message) {
                this.tempMsg = JSON.parse(message.payloadString);
                this.obelometer.showTemperature(this.tempMsg.temperature.value);
            }
        }
    }
</script>

<style scoped>
    .obelometer-display {
        margin-top: 200px;
    }

    .temp-display {
        font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
        font-weight: bolder;
        font-size: 8em;
        display:block;
    }

    .time-display {
        font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
        font-weight: bolder;
        font-size: 3em;
        display:block;
    }

</style>