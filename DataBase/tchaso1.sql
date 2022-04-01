-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 01 avr. 2022 à 18:24
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tchaso1`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `num_whasapp` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id`, `email`, `etat`, `genre`, `login`, `nom`, `num_whasapp`, `password`, `prenom`, `profile`) VALUES
(1, 'seydinaoumardiarra@gmail.com', 'actif', 'Homme', 'seydina', 'DIARRA', '78704434', '1111', 'Seydina Oumar', 'super_admin'),
(2, 'kaneousmane426@gmail.com', 'actif', 'Homme', 'ousmane', 'KANE', NULL, 'TchaOusKAN', 'Ousmane', 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `num_whasapp` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `administrateur_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `email`, `etat`, `genre`, `login`, `nom`, `num_whasapp`, `password`, `prenom`, `photo`, `profession`, `type`, `administrateur_id`) VALUES
(1, NULL, 'actif', 'Homme', 'ibrah', 'KONATE', '67997766', '1111', 'Ibrahima', NULL, NULL, 'client', NULL),
(2, NULL, 'actif', 'Homme', 'oumar', 'DIARRA', '65443322', '1111', 'Oumar', NULL, NULL, 'client', NULL),
(3, NULL, 'actif', 'Homme', 'fous', 'DEMBELE', '56778899', '1111', 'Fousseyni', NULL, NULL, 'client', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` int(11) NOT NULL,
  `datepub` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  `travailleur_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `commentaire`
--

INSERT INTO `commentaire` (`id`, `datepub`, `description`, `etat`, `client_id`, `travailleur_id`) VALUES
(1, '2022-03-23 17:09:11', 'okk', 'actif', 1, 3),
(2, '2022-03-23 17:09:13', 'okk', 'actif', 1, 3),
(3, '2022-03-23 17:09:13', 'okk', 'actif', 1, 3),
(4, '2022-03-23 17:11:46', 'okk', 'actif', 1, 3),
(5, '2022-03-23 17:25:28', 'ok', 'actif', 1, 3),
(6, '2022-03-23 17:25:29', 'ok', 'actif', 1, 3),
(7, '2022-03-23 17:40:34', 'Très bon travailleur', 'actif', 1, 1),
(8, '2022-03-23 18:16:01', 'très bon travailleur', 'actif', 1, 4),
(9, '2022-03-23 18:18:29', 'test', 'actif', 1, 4),
(10, '2022-03-23 18:21:13', 'Il est exceptionnel', 'actif', 1, 4);

-- --------------------------------------------------------

--
-- Structure de la table `competence`
--

CREATE TABLE `competence` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `nom_com` varchar(255) DEFAULT NULL,
  `travailleur_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `competence`
--

INSERT INTO `competence` (`id`, `description`, `etat`, `nom_com`, `travailleur_id`) VALUES
(1, 'Arrosage des fleurs', 'actif', 'Arrosage', 2),
(2, 'S\'occupant de fleurs', 'actif', 'Fleuriste', 2),
(3, 'surveillance des enfants à domicile', 'actif', 'surveillance des enfants', 3),
(4, 'Nettiyage des cours', 'actif', 'Nettoyage', 3),
(5, 'arrosage', 'inactif', 'arrosage des fleurs', 3);

-- --------------------------------------------------------

--
-- Structure de la table `demande`
--

CREATE TABLE `demande` (
  `id` int(11) NOT NULL,
  `datedemande` datetime DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `isaccepet` bit(1) DEFAULT NULL,
  `motifdemande` varchar(255) DEFAULT NULL,
  `statutdemande` varchar(255) DEFAULT NULL,
  `statutdemandeclient` varchar(255) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  `travailleur_id` int(11) DEFAULT NULL,
  `travailleurclient_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `demande`
--

INSERT INTO `demande` (`id`, `datedemande`, `etat`, `isaccepet`, `motifdemande`, `statutdemande`, `statutdemandeclient`, `client_id`, `travailleur_id`, `travailleurclient_id`) VALUES
(1, '2022-03-12 19:00:49', 'actif', b'1', 'je vous veux', 'lu', 'lu', 1, 2, NULL),
(2, '2022-03-12 19:23:45', 'actif', b'1', 'je veux un plombier pour mon robinet', 'lu', 'lu', 1, 2, NULL),
(3, '2022-03-14 09:22:13', 'actif', b'1', 'slt j\'ai besoin de vous', 'lu', 'lu', 1, 2, NULL),
(4, '2022-03-14 11:49:09', 'actif', b'1', 'hbdbj', 'lu', 'lu', 2, 1, NULL),
(5, '2022-03-23 09:46:36', 'actif', NULL, 'test', 'lu', 'lu', 1, 4, NULL),
(6, '2022-03-23 09:48:22', 'actif', b'1', 'okk', 'lu', 'lu', 1, 4, NULL),
(7, '2022-03-23 09:54:02', 'actif', b'1', 'test', 'lu', 'lu', 2, 1, NULL),
(8, '2022-03-23 11:19:17', 'actif', b'0', 'tetstz', 'lu', 'lu', 3, 4, NULL),
(9, '2022-03-24 14:40:53', 'actif', b'1', 'slt j\'ai besoin de vous', 'lu', 'lu', 1, 4, NULL),
(10, '2022-03-24 14:43:50', 'actif', b'1', 'j\'ai besoin de votre service', 'lu', 'lu', 1, 4, NULL),
(11, '2022-03-24 18:17:42', 'actif', NULL, 'slt à vous. j\'ai besoin de votre service', 'lu', 'lu', 1, 4, NULL),
(12, '2022-03-25 15:56:06', 'actif', NULL, 'test', 'non_lu', 'lu', 1, 1, NULL),
(13, '2022-03-25 16:00:55', 'actif', b'0', 'test', 'lu', 'lu', 1, 2, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `notation`
--

CREATE TABLE `notation` (
  `id` int(11) NOT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `note` int(11) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  `travailleur_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `notation`
--

INSERT INTO `notation` (`id`, `etat`, `note`, `client_id`, `travailleur_id`) VALUES
(5, 'actif', 1, 1, 1),
(3, 'actif', 3, 1, 3),
(4, 'actif', 2, 1, 3),
(6, 'actif', 5, 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `nomser` varchar(255) DEFAULT NULL,
  `administrateur_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `service`
--

INSERT INTO `service` (`id`, `description`, `etat`, `icone`, `nomser`, `administrateur_id`) VALUES
(1, 'Service s\'occupant des travaux domiciliers', 'actif', 'menage (1).png', 'Ménagers', 1),
(2, 'Ce service regroupe les menuisiers, plombiers, etc.', 'actif', 'construction (1).png', 'Constructions', 1),
(3, 'Services de constructions ou de ventes des objets artisanaux', 'actif', 'artisant (1).png', 'Artisanaux', 1),
(4, 'Services de conceptions, de réparations, de dépannages technologiques', 'actif', 'technologie (1).png', 'Technologies', 1);

-- --------------------------------------------------------

--
-- Structure de la table `specialite`
--

CREATE TABLE `specialite` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `nomspe` varchar(255) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `specialite`
--

INSERT INTO `specialite` (`id`, `description`, `etat`, `nomspe`, `service_id`) VALUES
(1, 'Profil s\'occupant de surveiller les maisons', 'actif', 'Gardiennage', 1),
(2, 'plombier', 'actif', 'Plombier', 2),
(3, 'Spécialité s\'occupant des jardins', 'actif', 'Jardinage', 1);

-- --------------------------------------------------------

--
-- Structure de la table `travailleur`
--

CREATE TABLE `travailleur` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `num_whasapp` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `pieceiden` varchar(255) DEFAULT NULL,
  `quartier` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `administrateur_id` int(11) DEFAULT NULL,
  `specialite_id` int(11) DEFAULT NULL,
  `ville_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `travailleur`
--

INSERT INTO `travailleur` (`id`, `email`, `etat`, `genre`, `login`, `nom`, `num_whasapp`, `password`, `prenom`, `photo`, `pieceiden`, `quartier`, `type`, `administrateur_id`, `specialite_id`, `ville_id`) VALUES
(1, 'traore.yacouba2012@gmail.com', 'actif', 'Homme', 'yacou', 'TRAORE', '65443322', 'TchaYac54TRA', 'Yacouba', 'infos.png', 'competence.png', 'Kalaban', 'travailleur', 1, 1, 1),
(2, NULL, 'actif', 'Homme', 'hamidou', 'Santara', '67888899', 'TchaHamSan', 'Hamidou', 'plombier.jpg', 'entete1.png', 'Faladje', 'travailleur', 1, 2, 1),
(3, 'a@gmail.com', 'actif', 'Homme', 'ozo', 'KANEE', '54332211', 'TchaOus43KAN', 'Ousmane', 'menuisier.jpg', 'entete1.png', 'Kalaban', 'travailleur', 1, 1, 1),
(4, 'seydinaoumardiarra@gmail.com', 'actif', 'Homme', 'mamadou', 'KANE', '65443322', 'TchaMam54KAN', 'Mamadou', 'electricien.jpg', 'entete1.png', 'Sotuba', 'travailleur', 1, 1, 1),
(5, 'kaou@gmail.com', 'actif', 'Homme', 'kaou', 'DIALLO', '76554433', 'TchaKao65DIA', 'Kaou', 'MVC.jpg', 'MVC.jpg', 'Kalaban', 'travailleur', 1, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `ville`
--

CREATE TABLE `ville` (
  `id` int(11) NOT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `nomville` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ville`
--

INSERT INTO `ville` (`id`, `etat`, `nomville`) VALUES
(1, 'actif', 'Bamako');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKsh6o1r8bje992vvpw5uukdq4i` (`administrateur_id`);

--
-- Index pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKe227vm69ycuegbfaxbvlvwudw` (`client_id`),
  ADD KEY `FKnmiql6jhf4su8avx3lkfauv13` (`travailleur_id`);

--
-- Index pour la table `competence`
--
ALTER TABLE `competence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKe0epan3oc2llquvc8ict8un4f` (`travailleur_id`);

--
-- Index pour la table `demande`
--
ALTER TABLE `demande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKc66vhno1dib3wuthj7auxmbma` (`client_id`),
  ADD KEY `FKe820fsyyrnj9s63hpklcd047e` (`travailleur_id`),
  ADD KEY `FK6dkqcfknknidob7r8i318dctp` (`travailleurclient_id`);

--
-- Index pour la table `notation`
--
ALTER TABLE `notation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKnsrp497v5wj39d0uyc6mufgyp` (`client_id`),
  ADD KEY `FK8chuvygkplxprcromi8iqegs9` (`travailleur_id`);

--
-- Index pour la table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKe6fpkxtaiymlcqt3msfsmlqsi` (`administrateur_id`);

--
-- Index pour la table `specialite`
--
ALTER TABLE `specialite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKnke5rowwbbg0frtp9v95b9yxw` (`service_id`);

--
-- Index pour la table `travailleur`
--
ALTER TABLE `travailleur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK3nxyks5yw6bhx5s58r61j6f8k` (`administrateur_id`),
  ADD KEY `FKlq52p31jdkr07463rqaq3sg96` (`specialite_id`),
  ADD KEY `FKg088ne7ec66npsn3ud3k2tnb2` (`ville_id`);

--
-- Index pour la table `ville`
--
ALTER TABLE `ville`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `commentaire`
--
ALTER TABLE `commentaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `competence`
--
ALTER TABLE `competence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `demande`
--
ALTER TABLE `demande`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `notation`
--
ALTER TABLE `notation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `specialite`
--
ALTER TABLE `specialite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `travailleur`
--
ALTER TABLE `travailleur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `ville`
--
ALTER TABLE `ville`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
