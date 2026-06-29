-- ============================================================
-- iZ Studio — Supabase şeması
-- Supabase → SQL Editor'da bu dosyanın tamamını çalıştırın.
-- ============================================================

-- 1) Ürünler tablosu ----------------------------------------
create table if not exists public.products (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  slug        text not null unique,
  category    text not null check (category in ('Tişört','Hoodie','Sweatshirt','Aksesuar')),
  collection  text not null default '',
  price       numeric not null default 0,
  image       text not null default '',
  colors      text[] not null default '{}',
  sizes       text[] not null default '{}',
  description text not null default '',
  material    text[] not null default '{}',
  story       text not null default '',
  shopier_url text,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now()
);

alter table public.products enable row level security;

-- Herkes ürünleri okuyabilir (vitrin).
drop policy if exists "products read" on public.products;
create policy "products read"
  on public.products for select
  using (true);

-- Yalnızca giriş yapmış (admin) kullanıcı yazabilir.
drop policy if exists "products write" on public.products;
create policy "products write"
  on public.products for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- 2) Görsel deposu (Storage) --------------------------------
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

-- Görseller herkese açık okunur.
drop policy if exists "product images read" on storage.objects;
create policy "product images read"
  on storage.objects for select
  using (bucket_id = 'product-images');

-- Yükleme/güncelleme/silme yalnızca giriş yapmış kullanıcı.
drop policy if exists "product images write" on storage.objects;
create policy "product images write"
  on storage.objects for all
  using (bucket_id = 'product-images' and auth.role() = 'authenticated')
  with check (bucket_id = 'product-images' and auth.role() = 'authenticated');

-- 3) Başlangıç ürünleri (seed) ------------------------------
insert into public.products
  (title, slug, category, collection, price, image, colors, sizes, description, material, story, sort_order)
values
  ('Kıpçak Kurt Tişört','kipcak-kurt-tisort','Tişört','Kıpçak Kökleri',1250,
   'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80',
   '{"Gece Siyahı","Kum","Keten"}','{"S","M","L","XL"}',
   'Bozkır geometrisi ve tamga formlarından ilham alan premium pamuklu tişört.',
   '{"%100 taraklı pamuk","Premium serigrafi baskı","Oversize kalıp","Sınırlı üretim"}',
   'Kurt çizilmez, sezdirilir. Tek bir tamga çizgisi, kadim yol gösterme fikrini modern bir silüete taşır.',1),
  ('Göktürk Runik Hoodie','gokturk-runik-hoodie','Hoodie','Göktürk Mirası',2450,
   'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=80',
   '{"Gece Siyahı","Antrasit"}','{"S","M","L","XL"}',
   'Sade runik yapı taşıyan ağır gramajlı kapüşonlu sweatshirt.',
   '{"430 gsm fırçalı pamuk","Ton sür ton nakış","Rahat kalıp","Sınırlı üretim"}',
   'Orhun harfleri mimariye indirgendi. Sessizce taşınır, yakından okunur.',2),
  ('Hun Bronz Sweatshirt','hun-bronz-sweatshirt','Sweatshirt','Hun Çağı',1890,
   'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80',
   '{"Antrasit","Taş"}','{"S","M","L","XL"}',
   'Taş tonlarında, etek ucunda eskitilmiş bronz iz taşıyan sweatshirt.',
   '{"380 gsm iç havlı pamuk","Bronz pigment baskı","Boxy kalıp","Sınırlı üretim"}',
   'Bronz burada parlamaz; eskir — tıpkı bozkırın erken çağ metal işçiliği gibi.',3),
  ('Bozkır Geometri Tişört','bozkir-geometri-tisort','Tişört','Kıpçak Kökleri',1150,
   'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
   '{"Keten","Gece Siyahı"}','{"S","M","L","XL"}',
   'Keten tonunda, tek bir bozkır geometrisi çizgisi taşıyan tişört.',
   '{"%100 taraklı pamuk","İnce çizgi serigrafi","Regular kalıp","Sınırlı üretim"}',
   'Miras süs değil, yapıdır.',4),
  ('Tamga İzi Sweatshirt','tamga-izi-sweatshirt','Sweatshirt','Göktürk Mirası',1790,
   'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=80',
   '{"Gece Siyahı","Antrasit","Kum"}','{"S","M","L","XL"}',
   'Tek ve özenli bir tamga iziyle dengelenen sade sweatshirt.',
   '{"360 gsm pamuk","Kabartma tamga detayı","Rahat kalıp","Sınırlı üretim"}',
   'Tek iz, tek yerde. Hiçbir şey onunla yarışmaz.',5),
  ('Bozkır Deri Şapka','bozkir-deri-sapka','Aksesuar','Hun Çağı',980,
   'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80',
   '{"Antrasit","Bronz"}','{"Tek Beden"}',
   'Sessiz bir bronz kuş gözü detayı taşıyan yapılı şapka.',
   '{"Pamuk dimi","Deri ayar kayışı","Bronz aksesuar","Sınırlı üretim"}',
   'Önce malzeme konuşur, sonra sembol.',6),
  ('Orhun Çizgi Hoodie','orhun-cizgi-hoodie','Hoodie','Göktürk Mirası',2350,
   'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=1000&q=80',
   '{"Gece Siyahı","Taş"}','{"S","M","L","XL"}',
   'Kol boyunca inen tek bir dikey runik çizgi taşıyan minimal hoodie.',
   '{"420 gsm fırçalı pamuk","Ton sür ton baskı","Oversize kalıp","Sınırlı üretim"}',
   'Slogan değil, bir çizgi. Hafıza yüzeyin altında kalır.',7),
  ('Bronz Kartal Tişört','bronz-kartal-tisort','Tişört','Hun Çağı',1290,
   'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
   '{"Gece Siyahı","Kum"}','{"S","M","L","XL"}',
   'Tek bir eskitilmiş bronz darbeyle soyutlanmış kartal formu.',
   '{"%100 taraklı pamuk","Bronz pigment baskı","Oversize kalıp","Sınırlı üretim"}',
   'Kartal bilinçli olarak soyut — kostüme kaçmayan bir sembolizm.',8)
on conflict (slug) do nothing;

-- 4) Admin kullanıcısı --------------------------------------
-- Supabase Auth e-posta tabanlıdır. Tek admin için:
--   Supabase → Authentication → Users → "Add user"
--     Email:    izstudio@izstudio.app   (NEXT_PUBLIC_ADMIN_EMAIL ile aynı olmalı)
--     Password: pascal21
--     "Auto Confirm User" işaretli olsun.
-- Giriş ekranında kullanıcı adı "izstudio" yazılır; arka planda bu e-postaya eşlenir.
