import axios from 'axios';

const srcLink = "https://blackjack.fuzz.me.uk";

export default {
    sit(input) {
        return axios
            .post (srcLink + "/sit", input)
            .then (response => response = response.data);
    },

    deal(input) {
        return axios
            .post (srcLink + "/deal", input)
            .then (response => response = response.data);
    },

    turn(input) {
        return axios
            .post (srcLink + "/turn", input)
            .then (response => response = response.data);
    },

    stand(input) {
        return axios
            .post (srcLink + "/stand", input)
            .then (response => response = response.data);
    }
}