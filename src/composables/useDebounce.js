import { ref } from "vue";

const timeout = ref(undefined);

export default function useDebounce(fn, delay) {
  if (timeout.value) {
    timeout.value = clearTimeout(timeout.value);
  }

  timeout.value = setTimeout(fn, delay);
}
