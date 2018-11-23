export const mockSecrets = {
    hsl: {
        username: 'palveluvayla_hsl_mydata',
        password: 'mock',
    },
    frank: {
        username: 'palveluvayla_frank_mydata',
        password: 'mock',
    },
};

export const oppija = {
    henkilö: {
        oid: '1.2.246.562.24.92333381381',
        hetu: '120496-ABC1',
        syntymäaika: '1996-04-12',
        etunimet: 'Aarne',
        kutsumanimi: 'Aarne',
        sukunimi: 'Ammattilainen1',
        äidinkieli: {
            koodiarvo: 'FI',
            nimi: { fi: 'suomi', sv: 'finska', en: 'Finnish' },
            lyhytNimi: { fi: 'suomi', sv: 'finska', en: 'Finnish' },
            koodistoUri: 'kieli',
            koodistoVersio: 1,
        },
        kansalaisuus: [
            {
                koodiarvo: '246',
                koodistoUri: 'maatjavaltiot2',
                koodistoVersio: 1,
            },
        ],
        turvakielto: false,
    },
    opiskeluoikeudet: [{
        arvioituPäättymispäivä: '2020-05-01',
        lisätiedot: {
            osaAikaisuusjaksot: [
                {
                    alku: '2018-05-08',
                    osaAikaisuus: 50,
                },
                {
                    alku: '2019-05-08',
                    osaAikaisuus: 80,
                },
            ],
        },
        oppilaitos: {
            nimi: {
                fi: 'Lappeen koulu',
            },
            oppilaitosnumero: {
                koodiarvo: '03829',
            },
        },
        sisältyyOpiskeluoikeuteen: {
            oppilaitos: {
                oid: '1.2.246.562.10.52251087186',
            },
        },
        suoritukset: [
            {
                järjestämismuodot: [
                    {
                        järjestämismuoto: {
                            tunniste: {
                                koodiarvo: '20',
                            },
                        },
                    },
                ],
                koulutussopimukset: [
                    {
                        työssäoppimispaikka: {
                            fi: 'McDonalds',
                        },
                    },
                ],
                osaamisenHankkimistavat: [
                    {
                        osaamisenHankkimistapa: {
                            tunniste: {
                                koodiarvo: 'oppisopimus',
                            },
                        },
                    },
                ],
            },
        ],
        tila: {
            opiskeluoikeusjaksot: [
                {
                    alku: '2008-08-15',
                    tila: {
                        koodiarvo: 'lasna',
                        koodistoUri: 'koskiopiskeluoikeudentila',
                        koodistoVersio: 1,
                        nimi: {
                            fi: 'Läsnä',
                            sv: 'Närvarande',
                        },
                    },
                },
                {
                    alku: '2016-06-04',
                    tila: {
                        koodiarvo: 'valmistunut',
                        koodistoUri: 'koskiopiskeluoikeudentila',
                        koodistoVersio: 1,
                        nimi: {
                            fi: 'Valmistunut',
                            sv: 'Utexaminerad',
                        },
                    },
                },
            ],
        },
    }],
};

export const valleVirta = {
    henkilö: {
        oid: '1.2.246.562.24.36140094212',
        hetu: '060696-5219',
        syntymäaika: '1996-06-06',
        etunimet: 'Valle',
        kutsumanimi: 'Valle',
        sukunimi: 'Virta',
        turvakielto: false,
    },
    opiskeluoikeudet: [
        {
            lähdejärjestelmänId: {
                id: 'oo1c6',
                lähdejärjestelmä: {
                    koodiarvo: 'virta',
                    nimi: {
                        fi: 'virta',
                    },
                    koodistoUri: 'lahdejarjestelma',
                    koodistoVersio: 1,
                },
            },
            oppilaitos: {
                oid: '1.2.246.562.10.64733493619',
                oppilaitosnumero: {
                    koodiarvo: '01903',
                    nimi: {
                        fi: 'Åbo Akademi',
                        sv: 'Åbo Akademi',
                        en: 'Åbo Akademi University',
                    },
                    lyhytNimi: {
                        fi: 'Åbo Akademi',
                        sv: 'Åbo Akademi',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Åbo Akademi',
                    sv: 'Åbo Akademi',
                    en: 'Åbo Akademi University',
                },
                kotipaikka: {
                    koodiarvo: '853',
                    nimi: {
                        fi: 'Turku',
                        sv: 'Åbo',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 2,
                },
            },
            päättymispäivä: '2020-07-31',
            tila: {
                opiskeluoikeusjaksot: [
                    {
                        alku: '2013-08-01',
                        tila: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'aktiivinen',
                                sv: 'aktiv',
                            },
                            koodistoUri: 'virtaopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2014-08-01',
                        tila: {
                            koodiarvo: '4',
                            nimi: {
                                fi: 'passivoitu',
                                sv: 'passiverad',
                            },
                            koodistoUri: 'virtaopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2015-08-01',
                        tila: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'aktiivinen',
                                sv: 'aktiv',
                            },
                            koodistoUri: 'virtaopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2017-08-01',
                        tila: {
                            koodiarvo: '4',
                            nimi: {
                                fi: 'passivoitu',
                                sv: 'passiverad',
                            },
                            koodistoUri: 'virtaopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                    {
                        alku: '2018-01-01',
                        tila: {
                            koodiarvo: '1',
                            nimi: {
                                fi: 'aktiivinen',
                                sv: 'aktiv',
                            },
                            koodistoUri: 'virtaopiskeluoikeudentila',
                            koodistoVersio: 1,
                        },
                    },
                ],
            },
            lisätiedot: {
                ensisijaisuus: [
                    {
                        alku: '2013-08-01',
                    },
                ],
                virtaOpiskeluoikeudenTyyppi: {
                    koodiarvo: '2',
                    nimi: {
                        fi: 'Alempi korkeakoulututkinto',
                        sv: 'Lägre högskoleexamen',
                    },
                    koodistoUri: 'virtaopiskeluoikeudentyyppi',
                    koodistoVersio: 1,
                },
                lukukausiIlmoittautuminen: {
                    ilmoittautumisjaksot: [
                        {
                            alku: '2013-08-01',
                            loppu: '2013-12-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2014-01-01',
                            loppu: '2014-07-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2014-08-01',
                            loppu: '2014-12-31',
                            tila: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: 'Puuttuu',
                                    sv: 'Saknas',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: false,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2015-08-01',
                            loppu: '2015-12-31',
                            tila: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'Poissa',
                                    sv: 'Frånvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: false,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2016-01-01',
                            loppu: '2016-07-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2016-08-01',
                            loppu: '2016-12-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2017-01-01',
                            loppu: '2017-07-31',
                            tila: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: 'Puuttuu',
                                    sv: 'Saknas',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2017-08-01',
                            loppu: '2017-12-31',
                            tila: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: 'Puuttuu',
                                    sv: 'Saknas',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2018-01-01',
                            loppu: '2018-07-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2018-08-01',
                            loppu: '2018-12-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2019-01-01',
                            loppu: '2019-07-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2019-08-01',
                            loppu: '2019-12-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2020-01-01',
                            loppu: '2020-07-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                        {
                            alku: '2020-08-01',
                            loppu: '2020-12-31',
                            tila: {
                                koodiarvo: '1',
                                nimi: {
                                    fi: 'Läsnä',
                                    sv: 'Närvarande',
                                },
                                koodistoUri: 'virtalukukausiilmtila',
                                koodistoVersio: 1,
                            },
                            ylioppilaskunnanJäsen: true,
                            ythsMaksettu: false,
                        },
                    ],
                },
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '612101',
                            nimi: {
                                fi: 'Kasvatust. kand. (alempi), lastentarhanopettaja',
                                sv: 'Ped. kand. (lägre), barnträdgårdslärare',
                                en: 'BA, Kindergarten Teacher',
                            },
                            lyhytNimi: {
                                fi: 'KK (al), lastentarhanopettaja',
                                sv: 'PeK (lägre), barntr.',
                                en: 'Bachelor of Arts (Education), Kindergarten Teacher',
                            },
                            koodistoUri: 'koulutus',
                            koodistoVersio: 11,
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    osasuoritukset: [],
                    tyyppi: {
                        koodiarvo: 'korkeakoulututkinto',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
            ],
            tyyppi: {
                koodiarvo: 'korkeakoulutus',
                koodistoUri: 'opiskeluoikeudentyyppi',
            },
            synteettinen: false,
            alkamispäivä: '2013-08-01',
        },
        {
            lähdejärjestelmänId: {
                lähdejärjestelmä: {
                    koodiarvo: 'virta',
                    nimi: {
                        fi: 'virta',
                    },
                    koodistoUri: 'lahdejarjestelma',
                    koodistoVersio: 1,
                },
            },
            oppilaitos: {
                oid: '1.2.246.562.10.64733493619',
                oppilaitosnumero: {
                    koodiarvo: '01903',
                    nimi: {
                        fi: 'Åbo Akademi',
                        sv: 'Åbo Akademi',
                        en: 'Åbo Akademi University',
                    },
                    lyhytNimi: {
                        fi: 'Åbo Akademi',
                        sv: 'Åbo Akademi',
                    },
                    koodistoUri: 'oppilaitosnumero',
                    koodistoVersio: 1,
                },
                nimi: {
                    fi: 'Åbo Akademi',
                    sv: 'Åbo Akademi',
                    en: 'Åbo Akademi University',
                },
                kotipaikka: {
                    koodiarvo: '853',
                    nimi: {
                        fi: 'Turku',
                        sv: 'Åbo',
                    },
                    koodistoUri: 'kunta',
                    koodistoVersio: 2,
                },
            },
            tila: {
                opiskeluoikeusjaksot: [],
            },
            suoritukset: [
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '51856524',
                            nimi: {
                                fi: 'Didaktiikka (KK)',
                                sv: 'Didaktik',
                                en: 'Didactics',
                            },
                        },
                        nimi: {
                            fi: 'Didaktiikka (KK)',
                            sv: 'Didaktik',
                            en: 'Didactics',
                        },
                        laajuus: {
                            arvo: 2,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                lyhytNimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2013-10-09',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2013-10-09',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019140',
                            nimi: {
                                fi: 'Liikunnan ja terveyden didaktiikka 1',
                                sv: 'Idrottsdidaktik 1',
                                en: 'Physical education 1',
                            },
                        },
                        nimi: {
                            fi: 'Liikunnan ja terveyden didaktiikka 1',
                            sv: 'Idrottsdidaktik 1',
                            en: 'Physical education 1',
                        },
                        laajuus: {
                            arvo: 4,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: '2',
                                    sv: '2',
                                },
                                lyhytNimi: {
                                    fi: '2',
                                    sv: '2',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-03-13',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-03-13',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019169',
                            nimi: {
                                fi: 'Lapsen biologinen, sosiaalinen ja psykologinen kehitys',
                                sv: 'Barnets biologisk, social och psykisk utveckling',
                                en: 'Children\'s biological, social and psychological development',
                            },
                        },
                        nimi: {
                            fi: 'Lapsen biologinen, sosiaalinen ja psykologinen kehitys',
                            sv: 'Barnets biologisk, social och psykisk utveckling',
                            en: 'Children\'s biological, social and psychological development',
                        },
                        laajuus: {
                            arvo: 5,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: '2',
                                    sv: '2',
                                },
                                lyhytNimi: {
                                    fi: '2',
                                    sv: '2',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-05-06',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-05-06',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019172',
                            nimi: {
                                fi: 'Liikunta ja terveys',
                                sv: 'Idrott, motion och hälsa',
                                en: 'Physical education and health',
                            },
                        },
                        nimi: {
                            fi: 'Liikunta ja terveys',
                            sv: 'Idrott, motion och hälsa',
                            en: 'Physical education and health',
                        },
                        laajuus: {
                            arvo: 3,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '3',
                                nimi: {
                                    fi: '3',
                                    sv: '3',
                                },
                                lyhytNimi: {
                                    fi: '3',
                                    sv: '3',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2013-10-14',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2013-10-14',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '86390265',
                            nimi: {
                                fi: 'Kasvatuksen yhteiskunnalliset, historialliset ja filosofiset perusteet, ryhmät',
                                sv: 'Uppfostringens sociala, historiska och filosofiska grunder, grupper',
                                en: 'Social, Historical and Philosophical Foundations of Education, groups',
                            },
                        },
                        nimi: {
                            fi: 'Kasvatuksen yhteiskunnalliset, historialliset ja filosofiset perusteet, ryhmät',
                            sv: 'Uppfostringens sociala, historiska och filosofiska grunder, grupper',
                            en: 'Social, Historical and Philosophical Foundations of Education, groups',
                        },
                        laajuus: {
                            arvo: 1,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: 'HYV',
                                nimi: {
                                    fi: 'hyväksytty',
                                    sv: 'godkänd',
                                },
                                lyhytNimi: {
                                    fi: 'HYV',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2013-12-04',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2013-12-04',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '38896527',
                            nimi: {
                                fi: 'Varhaiskasvatuksen pedagogiikka',
                                sv: 'Småbarnspedagogik',
                                en: 'Basics of early childhood education',
                            },
                        },
                        nimi: {
                            fi: 'Varhaiskasvatuksen pedagogiikka',
                            sv: 'Småbarnspedagogik',
                            en: 'Basics of early childhood education',
                        },
                        laajuus: {
                            arvo: 4,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                lyhytNimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-05-20',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-05-20',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019133',
                            nimi: {
                                fi: 'Musiikin didaktiikka 1',
                                sv: 'Musikdidaktik 1',
                                en: 'Music education 1',
                            },
                        },
                        nimi: {
                            fi: 'Musiikin didaktiikka 1',
                            sv: 'Musikdidaktik 1',
                            en: 'Music education 1',
                        },
                        laajuus: {
                            arvo: 4,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '5',
                                nimi: {
                                    fi: '5',
                                    sv: '5',
                                },
                                lyhytNimi: {
                                    fi: '5',
                                    sv: '5',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-02-10',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-02-10',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '36391237',
                            nimi: {
                                fi: 'Opettajuuteen kasvu ja opintojen suunnittelu',
                                sv: 'Planering av studierna och uteckling av lärarskapet',
                                en: 'Orientation to university studies and kindergarten teacher`s profession',
                            },
                        },
                        nimi: {
                            fi: 'Opettajuuteen kasvu ja opintojen suunnittelu',
                            sv: 'Planering av studierna och uteckling av lärarskapet',
                            en: 'Orientation to university studies and kindergarten teacher`s profession',
                        },
                        laajuus: {
                            arvo: 2,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: 'HYV',
                                nimi: {
                                    fi: 'hyväksytty',
                                    sv: 'godkänd',
                                },
                                lyhytNimi: {
                                    fi: 'HYV',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-03-24',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-03-24',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '45476394',
                            nimi: {
                                fi: 'Lapsuuden muuttuminen',
                                sv: 'Barndomens förändring',
                                en: 'Changing childhood',
                            },
                        },
                        nimi: {
                            fi: 'Lapsuuden muuttuminen',
                            sv: 'Barndomens förändring',
                            en: 'Changing childhood',
                        },
                        laajuus: {
                            arvo: 4,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '3',
                                nimi: {
                                    fi: '3',
                                    sv: '3',
                                },
                                lyhytNimi: {
                                    fi: '3',
                                    sv: '3',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-04-15',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-04-15',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '51856310',
                            nimi: {
                                fi: 'Johdatus kasvatuspsykologiaan',
                                sv: 'Utveckling, uppväxt och lärande',
                                en: 'Growth, development and learning',
                            },
                        },
                        nimi: {
                            fi: 'Johdatus kasvatuspsykologiaan',
                            sv: 'Utveckling, uppväxt och lärande',
                            en: 'Growth, development and learning',
                        },
                        laajuus: {
                            arvo: 3,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                lyhytNimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2013-12-04',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2013-12-04',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019145',
                            nimi: {
                                fi: 'Kuvataiteen didaktiikka 1',
                                sv: 'Bilddidaktik 1',
                                en: 'Arts education 1',
                            },
                        },
                        nimi: {
                            fi: 'Kuvataiteen didaktiikka 1',
                            sv: 'Bilddidaktik 1',
                            en: 'Arts education 1',
                        },
                        laajuus: {
                            arvo: 4,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: '4',
                                nimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                lyhytNimi: {
                                    fi: '4',
                                    sv: '4',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2013-12-16',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2013-12-16',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
                {
                    koulutusmoduuli: {
                        tunniste: {
                            koodiarvo: '2019179',
                            nimi: {
                                fi: 'Perusharjoittelu',
                                sv: 'Grundpraktik',
                                en: 'Basic practice',
                            },
                        },
                        nimi: {
                            fi: 'Perusharjoittelu',
                            sv: 'Grundpraktik',
                            en: 'Basic practice',
                        },
                        laajuus: {
                            arvo: 3,
                            yksikkö: {
                                koodiarvo: '2',
                                nimi: {
                                    fi: 'opintopistettä',
                                    sv: 'studiepoäng',
                                    en: 'ECTS credits',
                                },
                                lyhytNimi: {
                                    fi: 'op',
                                    sv: 'sp',
                                    en: 'ECTS cr',
                                },
                                koodistoUri: 'opintojenlaajuusyksikko',
                                koodistoVersio: 1,
                            },
                        },
                    },
                    toimipiste: {
                        oid: '1.2.246.562.10.64733493619',
                        oppilaitosnumero: {
                            koodiarvo: '01903',
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            lyhytNimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                            },
                            koodistoUri: 'oppilaitosnumero',
                            koodistoVersio: 1,
                        },
                        nimi: {
                            fi: 'Åbo Akademi',
                            sv: 'Åbo Akademi',
                            en: 'Åbo Akademi University',
                        },
                        kotipaikka: {
                            koodiarvo: '853',
                            nimi: {
                                fi: 'Turku',
                                sv: 'Åbo',
                            },
                            koodistoUri: 'kunta',
                            koodistoVersio: 2,
                        },
                    },
                    arviointi: [
                        {
                            arvosana: {
                                koodiarvo: 'HYV',
                                nimi: {
                                    fi: 'hyväksytty',
                                    sv: 'godkänd',
                                },
                                lyhytNimi: {
                                    fi: 'HYV',
                                },
                                koodistoUri: 'virtaarvosana',
                                koodistoVersio: 1,
                            },
                            päivä: '2018-02-07',
                            hyväksytty: true,
                        },
                    ],
                    vahvistus: {
                        päivä: '2018-02-07',
                        myöntäjäOrganisaatio: {
                            oid: '1.2.246.562.10.64733493619',
                            oppilaitosnumero: {
                                koodiarvo: '01903',
                                nimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                    en: 'Åbo Akademi University',
                                },
                                lyhytNimi: {
                                    fi: 'Åbo Akademi',
                                    sv: 'Åbo Akademi',
                                },
                                koodistoUri: 'oppilaitosnumero',
                                koodistoVersio: 1,
                            },
                            nimi: {
                                fi: 'Åbo Akademi',
                                sv: 'Åbo Akademi',
                                en: 'Åbo Akademi University',
                            },
                            kotipaikka: {
                                koodiarvo: '853',
                                nimi: {
                                    fi: 'Turku',
                                    sv: 'Åbo',
                                },
                                koodistoUri: 'kunta',
                                koodistoVersio: 2,
                            },
                        },
                    },
                    suorituskieli: {
                        koodiarvo: 'FI',
                        nimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        lyhytNimi: {
                            fi: 'suomi',
                            sv: 'finska',
                            en: 'Finnish',
                        },
                        koodistoUri: 'kieli',
                        koodistoVersio: 1,
                    },
                    tyyppi: {
                        koodiarvo: 'korkeakoulunopintojakso',
                        koodistoUri: 'suorituksentyyppi',
                    },
                },
            ],
            tyyppi: {
                koodiarvo: 'korkeakoulutus',
                koodistoUri: 'opiskeluoikeudentyyppi',
            },
            synteettinen: true,
        },
    ],
};
