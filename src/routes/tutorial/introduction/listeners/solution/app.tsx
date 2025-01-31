import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const github = useStore({
    org: 'BuilderIO',
    repos: ['qwik', 'partytown'] as string[] | null,
  });

  return (
    <main>
      <p>
        <label>
          Имя пользователя GitHub:
          <input
            value={github.org}
            onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}
          />
        </label>
      </p>
      <section>
        {github.repos ? (
          <ul>
            {github.repos.map((repo) => (
              <li>
                <a href={`https://github.com/${github.org}/${repo}`}>
                  {github.org}/{repo}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          'загрузка...'
        )}
      </section>
    </main>
  );
});
