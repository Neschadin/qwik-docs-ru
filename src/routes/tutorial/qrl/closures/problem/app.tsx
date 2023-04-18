import { component$, useStore, $ } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ name: '' });
  return (
    <>
      <label>
        Введите своё имя и нажмите клавишу ввода:{' '}
        <input
          onInput$={$(async (event: KeyboardEvent) => {
            const input = event.target as HTMLInputElement;
            store.name = input.value;
          })}
          onChange$={$(async () => {
            if (store.name) alert(store.name);
          })}
          value={store.name}
        />
      </label>
    </>
  );
});
