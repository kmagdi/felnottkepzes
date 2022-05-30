-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Jan 08. 18:49
-- Kiszolgáló verziója: 10.4.22-MariaDB
-- PHP verzió: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `felnottkepzes`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `agazatok`
--

CREATE TABLE `agazatok` (
  `id` int(11) NOT NULL,
  `name` varchar(60) COLLATE utf32_hungarian_ci NOT NULL,
  `icon` varchar(30) COLLATE utf32_hungarian_ci NOT NULL DEFAULT 'school'
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_hungarian_ci;

--
-- A tábla adatainak kiíratása `agazatok`
--

INSERT INTO `agazatok` (`id`, `name`, `icon`) VALUES
(1, 'Bányászat és kohászat', 'school'),
(2, 'Egészségügy', 'local_hospital'),
(3, 'Egészségügyi technika', 'local_hospital'),
(4, 'Elektronika és elektrotechnika', 'school'),
(5, 'Élelmiszeripar', 'school'),
(6, 'Építőipar', 'school'),
(7, 'Épületgépészet', 'school'),
(8, 'Fa- és bútoripar', 'school'),
(9, 'Gazdálkodás és menedzsment', 'school'),
(10, 'Gépészet', 'school'),
(11, 'Honvédelem', 'school'),
(12, 'Informatika és távközlés', 'computer'),
(13, 'Kereskedelem', 'storefront'),
(14, 'Környezetvédelem és vízügy', 'school'),
(15, 'Közlekedés és szállítmányozás', 'school'),
(16, 'Kreatív', 'school'),
(17, 'Mezőgazdaság és erdészet', 'school'),
(18, 'Pedagógia', 'school'),
(19, 'Rendészet és közszolgálat', 'school'),
(20, 'Specializált gép- és járműgyártás', 'school'),
(21, 'Sport', 'school'),
(22, 'Szépészet', 'school'),
(23, 'Szociális', 'school'),
(24, 'Turizmus - vendéglátás', 'school'),
(25, 'Vegyipar', 'school'),
(26, 'Informatika', 'computer'),
(27, 'Távközlés', 'school'),
(29, 'Szoftverfejlesztő', 'computer'),
(30, 'valami új ágazat', 'school');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `intezmenyek`
--

CREATE TABLE `intezmenyek` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf32_hungarian_ci NOT NULL,
  `webpage_url` varchar(100) COLLATE utf32_hungarian_ci NOT NULL,
  `adress` varchar(100) COLLATE utf32_hungarian_ci NOT NULL,
  `email` varchar(50) COLLATE utf32_hungarian_ci NOT NULL,
  `tel` varchar(50) COLLATE utf32_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_hungarian_ci;

--
-- A tábla adatainak kiíratása `intezmenyek`
--

INSERT INTO `intezmenyek` (`id`, `name`, `webpage_url`, `adress`, `email`, `tel`) VALUES
(2, 'Kecskeméti SZC Gáspár András Technikum', 'http://kszc-gaspar.hu/', '6000 Kecskemét, Hunyadi tér 2.', '', ''),
(3, 'Kecskeméti SZC Kandó Kálmán Technikum', 'http://www.kkando.hu/', '6000 Kecskemét, Bethlen körút 63.', '', ''),
(4, 'Szent-Györgyi Albert Technikum', 'https://www.szent-gyorgyi.hu/', '6000 Kecskemét, Nyíri út 73.', 'szgya@kecskemetiszc.hu', '(+36) 76/492-104');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jelentkezesek`
--

CREATE TABLE `jelentkezesek` (
  `id` int(11) NOT NULL,
  `jelentkezo_id` int(11) NOT NULL,
  `tanfolyam_id` int(11) NOT NULL,
  `keres_kezdes` varchar(200) COLLATE utf32_hungarian_ci DEFAULT NULL,
  `keres_tanfolyam_hossz` varchar(200) COLLATE utf32_hungarian_ci DEFAULT NULL,
  `keres_egyeb` varchar(200) COLLATE utf32_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jelentkezok`
--

CREATE TABLE `jelentkezok` (
  `id` int(11) NOT NULL,
  `vnev` varchar(60) COLLATE utf32_hungarian_ci NOT NULL,
  `knev` varchar(60) COLLATE utf32_hungarian_ci NOT NULL,
  `sznev` varchar(100) COLLATE utf32_hungarian_ci NOT NULL,
  `szul_hely` varchar(60) COLLATE utf32_hungarian_ci NOT NULL,
  `szul_datum` date NOT NULL,
  `anya_szul_nev` varchar(100) COLLATE utf32_hungarian_ci NOT NULL,
  `allampolgarsag` varchar(30) COLLATE utf32_hungarian_ci NOT NULL DEFAULT 'magyar',
  `lakcim` varchar(100) COLLATE utf32_hungarian_ci NOT NULL,
  `oktatasi_azon` int(20) DEFAULT NULL,
  `email` varchar(100) COLLATE utf32_hungarian_ci NOT NULL,
  `tel` int(20) NOT NULL,
  `created` date NOT NULL,
  `status` varchar(30) COLLATE utf32_hungarian_ci NOT NULL DEFAULT 'pending',
  `token` varchar(256) COLLATE utf32_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szakmak`
--

CREATE TABLE `szakmak` (
  `id` int(11) NOT NULL,
  `szam` varchar(20) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `megnevezes` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `leiras` text CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `agazat` int(11) NOT NULL,
  `ikk_url` varchar(200) COLLATE utf32_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_hungarian_ci;

--
-- A tábla adatainak kiíratása `szakmak`
--

INSERT INTO `szakmak` (`id`, `szam`, `megnevezes`, `leiras`, `agazat`, `ikk_url`) VALUES
(1, '5 0715 01 06', 'Kohász és öntész technikus', 'valami...jcshjvhdsjkghsfjk', 1, ''),
(2, '4 0715 01 07', 'Öntvénykészítő', '', 1, ''),
(3, '5 0910 03 07', 'Perioperatív szakasszisztens', 'valami leírás', 2, ''),
(4, '5 0913 03 01', 'Általános ápoló', 'ez az ápoló szakma leírása.....', 2, 'https://szakkepzes.ikk.hu/kkk-ptt#egeszsegugy'),
(5, '5 0913 03 02', 'Egészségügyi asszisztens', '', 2, 'https://szakkepzes.ikk.hu/kkk-ptt#egeszsegugy'),
(6, '509130304', 'Gyakorló ápoló', 'Tevékenysége során alapápolást, gondozást végez, illetve asszisztensi feladatokat lát el. Egyénre szabott segítséget nyújt a betegnek és családjának a mozgásban, a pihenésben, a táplálkozásban, a személyi higiénében, a kiválasztási funkciók, illetve a megfelelő testhőmérséklet megtartásában és az oxigénszükséglet biztosításában. Biztonságos ápolási környezetet teremt, az előírásoknak megfelelően kezeli a gyógyszereket, fertőző anyagokat, a mozgást és az ápolást segítő eszközöket, anyagokat, textíliákat, kötszereket, műszereket. Eszközöket készít elő a különböző eszközös és laboratóriumi vizsgálatokhoz, diagnosztikus és terápiás beavatkozásokhoz, kivitelezésükben segítséget nyújt az egészségügyi team tagjainak.', 2, 'https://szakkepzes.ikk.hu/kkk-ptt#egeszsegugy'),
(7, '5 0913 03 11', 'Mentőápoló', '', 2, 'https://szakkepzes.ikk.hu/kkk-ptt#egeszsegugy'),
(8, '5 0914 03 03', 'Egészségügyi laboráns', '', 2, 'https://szakkepzes.ikk.hu/kkk-ptt#egeszsegugy'),
(9, '5 0914 03 05', 'Klinikai labóratóriumi szakasszisztens', '', 2, ''),
(10, ' 5 0914 03 08', 'Radiográfiai szakasszisztens', '', 2, ''),
(12, '5 0915 03 06', 'Ortopédiai műszerész', '', 2, ''),
(13, '4 0914 02 02', 'Optikaitermék-készítő', '', 3, ''),
(14, '5 0914 02 03', 'Optikus', '', 3, ''),
(15, '4 0713 04 02', 'Elektronikai műszerész', '', 4, ''),
(16, '4 0713 04 07', 'Villanyszerelő', '', 4, ''),
(17, '5 0713 04 04', 'Erősáramú elektrotechnikus', '', 4, ''),
(18, '5 0714 04 01', 'Automatikai technikus', '', 4, ''),
(19, '5 0714 04 03', 'Elektronikai technikus', '', 4, ''),
(20, '5 0714 04 05', 'Ipari informatikai technikus', '', 4, ''),
(21, '5 0714 04 06', 'Közlekedésautomatikai technikus', '', 4, ''),
(22, '507140406', 'Közlekedésüzemvitel-ellátó technikus', '', 4, ''),
(23, '07153002', 'Gépi kovács', '', 1, ''),
(24, '07153006', 'Vas- és acélfeldolgozó', '', 1, ''),
(25, '07153007', 'Hengerész', '', 1, ''),
(26, '07154005', 'Öntészeti mintakészítő', '', 1, ''),
(27, '07154004', 'Olvasztár és öntő', '', 1, ''),
(28, '06135001', 'Webfejlesztő', 'A webfejlesztő vagy programozó egy olyan személy, aki a webdizájner által készített tervekből leprogramozza magát a weboldalt. Ezt szinte mindig bonyolult kódok írásával valósítják meg, különböző programozási nyelveken. ', 12, 'https://api.ikk.hu/storage/uploads/files/06135001_webfejleszto_pdf-1604055435139.pdf'),
(29, '506131203', '\r\nSzoftverfejlesztő és -tesztelő', 'A szoftverfejlesztő és -tesztelő technikus olyan szakember, aki képes webes és asztali alkalmazást (szoftvert) tervezni, fejleszteni, tesztelni és dokumentálni. A programozási feladatokon túl adatbázisok tervezését és kezelését is elvégzi. Csapatban dolgozva együttműködik a szoftverfejlesztési projektben résztvevő többi munkatársával, képes a csoportmunkát támogató fejlesztői eszközök hatékony használatára.', 12, 'https://api.ikk.hu/storage/uploads/files/kkk_informatika_szoftverfejleszto_es_tesztelo_tech_2020pdf-1589880410952.pdf'),
(30, '04165006', 'Üzletvezető', 'Üzletet szeretnél nyitni? Szeretnéd kiskereskedelmi vállalkozásodat sikeresen működtetni, hosszabb távra jövőképet kialakítani és megfelelni a fogyasztói igényeknek? Szeretnél a kereskedelem jövőbeni fejlődéséről rendelkezésre álló korszerű ismeretekkel rendelkezni?', 13, 'https://api.ikk.hu/storage/uploads/files/04165006_uzletvezeto_pdf-1604056386994.pdf'),
(31, '06134007', 'Junior szoftvertesztelő', 'A szoftvertesztelő szakember legfőbb tevékenysége az üzleti elemzők és szoftverkészítő szakemberek folyamatban lévő fejlesztéseinek vagy kifejlesztett alkalmazásainak, szoftvereinek vizsgálata, ellenőrzött körülmények között végzett kipróbálása, tesztelése.', 12, 'https://api.ikk.hu/storage/uploads/files/06134007_junior_szoftvertesztelo_modpdf-1628175286920.pdf');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tanfolyamok`
--

CREATE TABLE `tanfolyamok` (
  `id` int(11) NOT NULL,
  `szakma_id` int(11) NOT NULL,
  `idotartam` int(4) NOT NULL,
  `idotartam_mertekegyseg` varchar(20) COLLATE utf32_hungarian_ci NOT NULL,
  `start_date_planned` date NOT NULL,
  `start_date` date DEFAULT NULL,
  `intezmeny_id` int(11) NOT NULL,
  `foto` varchar(50) COLLATE utf32_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_hungarian_ci;

--
-- A tábla adatainak kiíratása `tanfolyamok`
--

INSERT INTO `tanfolyamok` (`id`, `szakma_id`, `idotartam`, `idotartam_mertekegyseg`, `start_date_planned`, `start_date`, `intezmeny_id`, `foto`) VALUES
(1, 28, 8, 'hónap', '2022-03-10', '0000-00-00', 3, 'web.jpg'),
(2, 29, 2, 'év', '2022-02-06', '0000-00-00', 3, 'programozo.jpg'),
(6, 6, 1, 'év', '2022-01-12', NULL, 4, 'apolo.jpg'),
(7, 30, 140, 'óra', '2022-03-09', NULL, 2, 'bolt.jpg'),
(9, 31, 8, 'hónap', '2022-03-15', NULL, 3, 'tester.jpg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf32_hungarian_ci NOT NULL,
  `email` varchar(50) COLLATE utf32_hungarian_ci NOT NULL,
  `password` varchar(256) COLLATE utf32_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `agazatok`
--
ALTER TABLE `agazatok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `intezmenyek`
--
ALTER TABLE `intezmenyek`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jelentkezo_id` (`jelentkezo_id`,`tanfolyam_id`),
  ADD KEY `tanfolyam_id` (`tanfolyam_id`);

--
-- A tábla indexei `jelentkezok`
--
ALTER TABLE `jelentkezok`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A tábla indexei `szakmak`
--
ALTER TABLE `szakmak`
  ADD PRIMARY KEY (`id`),
  ADD KEY `agazat` (`agazat`);

--
-- A tábla indexei `tanfolyamok`
--
ALTER TABLE `tanfolyamok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `szakma_id` (`szakma_id`,`intezmeny_id`),
  ADD KEY `intezmeny_id` (`intezmeny_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `agazatok`
--
ALTER TABLE `agazatok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT a táblához `intezmenyek`
--
ALTER TABLE `intezmenyek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT a táblához `jelentkezok`
--
ALTER TABLE `jelentkezok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT a táblához `szakmak`
--
ALTER TABLE `szakmak`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT a táblához `tanfolyamok`
--
ALTER TABLE `tanfolyamok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  ADD CONSTRAINT `jelentkezesek_ibfk_1` FOREIGN KEY (`jelentkezo_id`) REFERENCES `jelentkezok` (`id`),
  ADD CONSTRAINT `jelentkezesek_ibfk_2` FOREIGN KEY (`tanfolyam_id`) REFERENCES `tanfolyamok` (`id`);

--
-- Megkötések a táblához `szakmak`
--
ALTER TABLE `szakmak`
  ADD CONSTRAINT `szakmak_ibfk_1` FOREIGN KEY (`agazat`) REFERENCES `agazatok` (`id`);

--
-- Megkötések a táblához `tanfolyamok`
--
ALTER TABLE `tanfolyamok`
  ADD CONSTRAINT `tanfolyamok_ibfk_1` FOREIGN KEY (`szakma_id`) REFERENCES `szakmak` (`id`),
  ADD CONSTRAINT `tanfolyamok_ibfk_2` FOREIGN KEY (`intezmeny_id`) REFERENCES `intezmenyek` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
