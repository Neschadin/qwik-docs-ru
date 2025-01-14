import { component$, useStyles$, type FunctionComponent } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import styles from '../ecosystem.css?inline';
import data from '../ecosystem.json';
import { MEDIA, type MediaEntry } from '../media/index';
import SHOWCASE from '../showcase/generated-pages.json';
import { EcosystemMenu } from './ecosystem-menu';
import { QwikPlusLogo } from './qwik-plus-logo';
import { MobileEcosystemMenu } from './mobile-ecosystem-menu';

export default component$(() => {
  useStyles$(styles);

  const mediaFilter = (item: MediaEntry) => item?.promoted;

  const courses = MEDIA.courses.filter(mediaFilter);
  const videos = MEDIA.videos.filter(mediaFilter);
  const podcasts = MEDIA.podcasts.filter(mediaFilter);
  const presentations = MEDIA.presentations.filter(mediaFilter);
  const showcaseSites = SHOWCASE.slice(0, 6);

  return (
    <>
      <div class="ecosystem lg:grid grid-cols-[240px,1fr] m-auto max-w-screen-xl gap-8">
        <EcosystemMenu />
        <MobileEcosystemMenu />

        <article class="px-6">
          <QwikPlusLogo />

          <div class="purple-gradient" role="presentation" />
          <div class="blue-gradient" role="presentation" />

          <section class="scroll-m-20 lg:scroll-m-24" id="deployments">
            <h2>
              <Link href="/docs/deployments/">Развёртывание</Link>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.deployments.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Добавить развёртывание"
                href="/docs/deployments/#добавить-новое-развёртывание"
              />
            </ul>
          </section>

          <section class="scroll-m-20 lg:scroll-m-24" id="integrations">
            <h2>
              <span>
                <Link href="/docs/integrations/">Интеграции</Link>
              </span>
              <span>
                <Link href="/docs/integrations/" class="text-sm">
                  Смотреть все
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.integrations.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Добавить интеграцию"
                href="/docs/integrations/#добавление-новой-интеграции"
              />
            </ul>
          </section>

          <section class="scroll-m-20 lg:scroll-m-24" id="libraries">
            <h2>
              <span>Библиотеки</span>
              <span></span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.libraries.map((item, i) => (
                <LibraryGridItem
                  title={item.title}
                  href={item.github}
                  imgSrc={item.imgSrc}
                  description={item.description}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem title="Добавить библиотеку" href="/docs/advanced/library/" />
            </ul>
          </section>

          <section class="scroll-m-20 lg:scroll-m-24">
            <h2>Рассылка</h2>
            <a href="https://qwiknewsletter.com" target="_blank">
              <div class="flex flex-col items-center gap-8">
                <div
                  class="flex justify-center p-4 w-full bg-[--qwik-dark-purple]
        bg-gradient-to-r from-[--qwik-dark-purple-bg] via-purple-500 to-[--qwik-dark-purple-bg]"
                >
                  <img
                    src="/ecosystem/qwik-newsletter.svg"
                    alt="Информационный бюллетень Qwikly - Еженедельные новости о Qwik"
                    loading="lazy"
                  />
                </div>
                <div class="text-2xl font-bold">Информационный бюллетень Qwikly - Еженедельные новости о Qwik</div>
              </div>
            </a>
          </section>

          <section class="scroll-m-20 lg:scroll-m-24" id="courses">
            <h2>
              <span>
                <Link href="/media/#courses">Курсы</Link>
              </span>
              <span>
                <Link href="/media/#courses" class="text-sm">
                  Смотреть все
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {courses.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Добавить курс"
                href="https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/(ecosystem)/media/index.tsx"
              />
            </ul>
          </section>

          <section class="scroll-m-20 lg:scroll-m-24" id="videos">
            <h2>
              <span>
                <Link href="/media/#videos">Видео</Link>
              </span>
              <span>
                <Link href="/media/#videos" class="text-sm">
                  Смотреть все
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {videos.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Добавить видео"
                href="https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/(ecosystem)/media/index.tsx"
              />
            </ul>
          </section>

          <section class="scroll-m-20 lg:scroll-m-24" id="podcasts">
            <h2>
              <span>
                <Link href="/media/#podcasts">Подкасты</Link>
              </span>
              <span>
                <Link href="/media/#podcasts" class="text-sm">
                  Смотреть все
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {podcasts.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Добавить подкаст"
                href="https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/(ecosystem)/media/index.tsx"
              />
            </ul>
          </section>

          <section class="scroll-m-20 lg:scroll-m-24" id="showcase">
            <h2>
              <span>
                <Link href="/showcase/">Галерея</Link>
              </span>
              <span>
                <Link href="/showcase/" class="text-sm">
                  Смотреть все
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {showcaseSites.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Добавить сайт"
                href="https://github.com/BuilderIO/qwik/edit/main/packages/docs/scripts/pages.json"
              />
            </ul>
          </section>

          <section class="scroll-m-20 lg:scroll-m-24" id="presentations">
            <h2>
              <span>
                <Link href="/media/#presentations">Презентации</Link>
              </span>
              <span>
                <Link href="/media/#presentations" class="text-sm">
                  Смотреть все
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {presentations.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Добавить презентацию"
                href="https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/(ecosystem)/media/index.tsx"
              />
            </ul>
          </section>

          <section class="scroll-m-20 lg:scroll-m-24" id="community">
            <h2>
              <Link href="/community/groups/">Сообщество</Link>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-4">
              {data.communities.map((item, i) => (
                <GridItem title={item.title} href={item.href} imgSrc={item.imgSrc} key={i} />
              ))}
            </ul>

            <aside class="mt-6 text-center">
              <p>Заинтересованы в создании местного сообщества Qwik?</p>
              <p>
                <a
                  class="text-blue-600 font-bold"
                  href="https://forms.gle/S1rxiKiVdhZqkk8RA"
                  target="_blank"
                >
                  Пожалуйста, подайте здесь заявку
                </a>{' '}
                для участия в программе Qwik Community Leaders
              </p>
            </aside>
          </section>

          <section class="scroll-m-20 lg:scroll-m-24" id="social">
            <h2>
              <Link href="/community/groups/">Группы</Link>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.social.map((item, i) => (
                <GridItem title={item.title} href={item.href} imgSrc={item.imgSrc} key={i} />
              ))}
            </ul>
          </section>
        </article>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Экосистема Qwik',
};

export const GridItem: FunctionComponent<GridItemProps> = (props) => {
  return (
    <li class="grid-item">
      <Link href={props.href}>
        <div class={{ thumbnail: props.thumbnailBg, cover: props.imgCover }}>
        <img src={props.imgSrc} alt={props.title} width="250" height="120" loading="lazy" />
        </div>
        <div class="text">{props.title}</div>
      </Link>
    </li>
  );
};

export const LibraryGridItem: FunctionComponent<LibraryGridItemProps> = (props) => {
  return (
    <li class="grid-item">
      <Link href={props.href}>
        <div class={{ thumbnail: props.thumbnailBg, cover: props.imgCover }}>
          <img src={props.imgSrc} alt={props.title} loading="lazy" />
        </div>
        <div class="text">{props.title}</div>
        <div class="description">{props.description}</div>
      </Link>
    </li>
  );
};

export const AddIntegrationItem: FunctionComponent<GridItemProps> = (props) => {
  return (
    <li class="grid-item add-integration">
      <Link href={props.href}>
        <div class="thumbnail">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64">
            <path fill="currentColor" d="M38 26V2H26v24H2v12h24v24h12V38h24V26z" />
          </svg>
        </div>
        <div class="text">{props.title}</div>
      </Link>
    </li>
  );
};

interface GridItemProps {
  title: string;
  href: string;
  imgSrc?: string;
  imgCover?: boolean;
  thumbnailBg?: boolean;
}

interface LibraryGridItemProps {
  title: string;
  href: string;
  description: string;
  imgSrc?: string;
  imgCover?: boolean;
  thumbnailBg: boolean;
}
