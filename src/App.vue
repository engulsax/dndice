<template>
  <div id="app">
    <div>
      <diceSelector />
      <diceCounter />
      <div
        id="dices"
        class="grid"
      >
        <dice
          v-for="num in diceState.amountOfDice"
          :key="num"
          :die-num="diceState.dices[diceState.selectedDie].dieNum"
        />
      </div>
    </div>
    <bbutton
      id="btn"
      class="btn"
      @buttonClick="rollDice()"
    >
      <h1 class="text">
        {{ getButtonText }}
      </h1>
    </bbutton>
  </div>
</template>

<script>
import diceSelector from "./components/dice.selector.vue";
import diceCounter from "./components/dice.counter.vue";
import dice from "./components/dice.vue";
import bbutton from "./components/button.vue";
import diceState, { rollDice } from "./dice.state";

export default {
  name: "App",
  components: {
    diceSelector,
    diceCounter,
    dice,
    bbutton,
  },
  data() {
    return {
      diceState,
      diceContainerHeigth: 200,
      rollDice,
    };
  },
  computed: {
    getButtonText() {
      return diceState.dieSum ? `=${diceState.dieSum}` : "ROLL";
    },
  },
  created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker &&
      navigator.serviceWorker.addEventListener(
        //triggered by registration.claim
        "controllerchange",
        () => {
          if (this.refreshing) return;
          this.refreshing = true;
          console.log("controllerchange triggered, -> auto refresh!!");
          window.location.reload();
        }
      );
  },
  mounted() {
    this.setDiceContainerHeigth();
  },
  methods: {
    setDiceContainerHeigth() {
      const diceContainer = document.getElementById("dices");
      const button = document.getElementById("btn").getBoundingClientRect();
      const containerHeigth =
        button.top - diceContainer.getBoundingClientRect().top - 68;
      diceContainer.style.maxHeight = `${containerHeigth}px`;
    },
    showRefreshUI(e) {
      // Display a button inviting the user to refresh/reload the app due
      // to an app update being available.
      // The new service worker is installed, but not yet active.
      // Store the ServiceWorkerRegistration instance for later use.
      if (e.detail) {
        this.worker = e.detail;
        this.updateExists = true;
        console.log("Showing refresh button.");
        console.log(this.worker);
      } else {
        console.warn("No worker data found!");
      }
    },
    refreshApp() {
      console.log("skipWaiting started");
      console.log(this.worker);
      // Handle a user tap on the update app button.
      this.updateExists = false;
      // Protect against missing registration.waiting.
      if (!this.worker) {
        console.warn("No worker data found when trying to refresh!");
        return;
      }
      this.worker.postMessage({ type: "SKIP_WAITING" });
      console.log("skipWaiting finished");
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .grid {
    margin: 1rem;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  .sum {
    position: absolute;
    bottom: 0;
    font-size: 3.3rem;
    margin: 0;
    text-align: center;
  }
  .btn {
    margin-bottom: 1rem;
  }
}
</style>
