import { component$, useStore } from '@builder.io/qwik';

export const App = component$(() => {
  const github = useStore({
    org: 'BuilderIO',
    repos: ['qwik', 'partytown'] as string[] | null,
  });

  return (
    <div>
      <span>
        Имя пользователя GitHub:
        <input
          value={github.org}
          onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}
        />
      </span>
      <div>
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
      </div>
    </div>
  );
});
