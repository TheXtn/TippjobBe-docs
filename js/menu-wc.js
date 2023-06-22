'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ActivitiesModule.html" data-type="entity-link" >ActivitiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ActivitiesModule-d41c43b292c4a5c66e36d1864357c5d6be6b95b8b93e62f3ccb2199dc1ae327c4965e889ae4460b02ad3406750820a9141669e8087b77eec9204633122539783"' : 'data-bs-target="#xs-controllers-links-module-ActivitiesModule-d41c43b292c4a5c66e36d1864357c5d6be6b95b8b93e62f3ccb2199dc1ae327c4965e889ae4460b02ad3406750820a9141669e8087b77eec9204633122539783"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ActivitiesModule-d41c43b292c4a5c66e36d1864357c5d6be6b95b8b93e62f3ccb2199dc1ae327c4965e889ae4460b02ad3406750820a9141669e8087b77eec9204633122539783"' :
                                            'id="xs-controllers-links-module-ActivitiesModule-d41c43b292c4a5c66e36d1864357c5d6be6b95b8b93e62f3ccb2199dc1ae327c4965e889ae4460b02ad3406750820a9141669e8087b77eec9204633122539783"' }>
                                            <li class="link">
                                                <a href="controllers/ActivitiesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ActivitiesModule-d41c43b292c4a5c66e36d1864357c5d6be6b95b8b93e62f3ccb2199dc1ae327c4965e889ae4460b02ad3406750820a9141669e8087b77eec9204633122539783"' : 'data-bs-target="#xs-injectables-links-module-ActivitiesModule-d41c43b292c4a5c66e36d1864357c5d6be6b95b8b93e62f3ccb2199dc1ae327c4965e889ae4460b02ad3406750820a9141669e8087b77eec9204633122539783"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ActivitiesModule-d41c43b292c4a5c66e36d1864357c5d6be6b95b8b93e62f3ccb2199dc1ae327c4965e889ae4460b02ad3406750820a9141669e8087b77eec9204633122539783"' :
                                        'id="xs-injectables-links-module-ActivitiesModule-d41c43b292c4a5c66e36d1864357c5d6be6b95b8b93e62f3ccb2199dc1ae327c4965e889ae4460b02ad3406750820a9141669e8087b77eec9204633122539783"' }>
                                        <li class="link">
                                            <a href="injectables/ActivitiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-893222716a7e2973cb175eae720035dcd57855fd6a44a5e4fc1c271afca1aee0dbdde3c4244a4b1efe8f78c3a18ccbb20c7927835bbc95ba65131f745a26e871"' : 'data-bs-target="#xs-controllers-links-module-AppModule-893222716a7e2973cb175eae720035dcd57855fd6a44a5e4fc1c271afca1aee0dbdde3c4244a4b1efe8f78c3a18ccbb20c7927835bbc95ba65131f745a26e871"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-893222716a7e2973cb175eae720035dcd57855fd6a44a5e4fc1c271afca1aee0dbdde3c4244a4b1efe8f78c3a18ccbb20c7927835bbc95ba65131f745a26e871"' :
                                            'id="xs-controllers-links-module-AppModule-893222716a7e2973cb175eae720035dcd57855fd6a44a5e4fc1c271afca1aee0dbdde3c4244a4b1efe8f78c3a18ccbb20c7927835bbc95ba65131f745a26e871"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-893222716a7e2973cb175eae720035dcd57855fd6a44a5e4fc1c271afca1aee0dbdde3c4244a4b1efe8f78c3a18ccbb20c7927835bbc95ba65131f745a26e871"' : 'data-bs-target="#xs-injectables-links-module-AppModule-893222716a7e2973cb175eae720035dcd57855fd6a44a5e4fc1c271afca1aee0dbdde3c4244a4b1efe8f78c3a18ccbb20c7927835bbc95ba65131f745a26e871"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-893222716a7e2973cb175eae720035dcd57855fd6a44a5e4fc1c271afca1aee0dbdde3c4244a4b1efe8f78c3a18ccbb20c7927835bbc95ba65131f745a26e871"' :
                                        'id="xs-injectables-links-module-AppModule-893222716a7e2973cb175eae720035dcd57855fd6a44a5e4fc1c271afca1aee0dbdde3c4244a4b1efe8f78c3a18ccbb20c7927835bbc95ba65131f745a26e871"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-624322ca7281754640c0c3f3033044d42a5dfea90b9e6c825b2501ec2d02ab0421a2990ed246c81802d4c0a486165ed3c95372860d00f50638bbaf7af31995c3"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-624322ca7281754640c0c3f3033044d42a5dfea90b9e6c825b2501ec2d02ab0421a2990ed246c81802d4c0a486165ed3c95372860d00f50638bbaf7af31995c3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-624322ca7281754640c0c3f3033044d42a5dfea90b9e6c825b2501ec2d02ab0421a2990ed246c81802d4c0a486165ed3c95372860d00f50638bbaf7af31995c3"' :
                                            'id="xs-controllers-links-module-AuthModule-624322ca7281754640c0c3f3033044d42a5dfea90b9e6c825b2501ec2d02ab0421a2990ed246c81802d4c0a486165ed3c95372860d00f50638bbaf7af31995c3"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-624322ca7281754640c0c3f3033044d42a5dfea90b9e6c825b2501ec2d02ab0421a2990ed246c81802d4c0a486165ed3c95372860d00f50638bbaf7af31995c3"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-624322ca7281754640c0c3f3033044d42a5dfea90b9e6c825b2501ec2d02ab0421a2990ed246c81802d4c0a486165ed3c95372860d00f50638bbaf7af31995c3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-624322ca7281754640c0c3f3033044d42a5dfea90b9e6c825b2501ec2d02ab0421a2990ed246c81802d4c0a486165ed3c95372860d00f50638bbaf7af31995c3"' :
                                        'id="xs-injectables-links-module-AuthModule-624322ca7281754640c0c3f3033044d42a5dfea90b9e6c825b2501ec2d02ab0421a2990ed246c81802d4c0a486165ed3c95372860d00f50638bbaf7af31995c3"' }>
                                        <li class="link">
                                            <a href="injectables/AtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MailjetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailjetService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilerModule.html" data-type="entity-link" >FilerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilerModule-10ae11fc33eb36eefd2597aa0bbcea88c5c375d074e2bc44e399df8e658b8b89333ac51e488a35be6fe6a26b229f2b0a35db139fdd76b2328a79c32c49ec1a2d"' : 'data-bs-target="#xs-injectables-links-module-FilerModule-10ae11fc33eb36eefd2597aa0bbcea88c5c375d074e2bc44e399df8e658b8b89333ac51e488a35be6fe6a26b229f2b0a35db139fdd76b2328a79c32c49ec1a2d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilerModule-10ae11fc33eb36eefd2597aa0bbcea88c5c375d074e2bc44e399df8e658b8b89333ac51e488a35be6fe6a26b229f2b0a35db139fdd76b2328a79c32c49ec1a2d"' :
                                        'id="xs-injectables-links-module-FilerModule-10ae11fc33eb36eefd2597aa0bbcea88c5c375d074e2bc44e399df8e658b8b89333ac51e488a35be6fe6a26b229f2b0a35db139fdd76b2328a79c32c49ec1a2d"' }>
                                        <li class="link">
                                            <a href="injectables/FilerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthCheckModule.html" data-type="entity-link" >HealthCheckModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthCheckModule-ff3d589130bc13ad82b1d63e0d901d704ce9e91b88b8290fc285d00525fd0adcfe4ff8892f31e1981eac8c8f7e2232d72561fccc2515dbe2b2904a1018d3f4be"' : 'data-bs-target="#xs-controllers-links-module-HealthCheckModule-ff3d589130bc13ad82b1d63e0d901d704ce9e91b88b8290fc285d00525fd0adcfe4ff8892f31e1981eac8c8f7e2232d72561fccc2515dbe2b2904a1018d3f4be"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthCheckModule-ff3d589130bc13ad82b1d63e0d901d704ce9e91b88b8290fc285d00525fd0adcfe4ff8892f31e1981eac8c8f7e2232d72561fccc2515dbe2b2904a1018d3f4be"' :
                                            'id="xs-controllers-links-module-HealthCheckModule-ff3d589130bc13ad82b1d63e0d901d704ce9e91b88b8290fc285d00525fd0adcfe4ff8892f31e1981eac8c8f7e2232d72561fccc2515dbe2b2904a1018d3f4be"' }>
                                            <li class="link">
                                                <a href="controllers/HealthCheckController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthCheckController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HealthCheckModule-ff3d589130bc13ad82b1d63e0d901d704ce9e91b88b8290fc285d00525fd0adcfe4ff8892f31e1981eac8c8f7e2232d72561fccc2515dbe2b2904a1018d3f4be"' : 'data-bs-target="#xs-injectables-links-module-HealthCheckModule-ff3d589130bc13ad82b1d63e0d901d704ce9e91b88b8290fc285d00525fd0adcfe4ff8892f31e1981eac8c8f7e2232d72561fccc2515dbe2b2904a1018d3f4be"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthCheckModule-ff3d589130bc13ad82b1d63e0d901d704ce9e91b88b8290fc285d00525fd0adcfe4ff8892f31e1981eac8c8f7e2232d72561fccc2515dbe2b2904a1018d3f4be"' :
                                        'id="xs-injectables-links-module-HealthCheckModule-ff3d589130bc13ad82b1d63e0d901d704ce9e91b88b8290fc285d00525fd0adcfe4ff8892f31e1981eac8c8f7e2232d72561fccc2515dbe2b2904a1018d3f4be"' }>
                                        <li class="link">
                                            <a href="injectables/CpuHealthIndicator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CpuHealthIndicator</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HealthCheckService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthCheckService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaHealthIndicator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaHealthIndicator</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImagesModule.html" data-type="entity-link" >ImagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ImagesModule-2bba973f8110cb9ce96924e0d8471a5f0d3383e7bc2b34df0264f637aa75c693d87f446ee3d2052b749c4ec97186614eac0e4cd7f85e6b2418a975fe0cfa6d66"' : 'data-bs-target="#xs-controllers-links-module-ImagesModule-2bba973f8110cb9ce96924e0d8471a5f0d3383e7bc2b34df0264f637aa75c693d87f446ee3d2052b749c4ec97186614eac0e4cd7f85e6b2418a975fe0cfa6d66"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ImagesModule-2bba973f8110cb9ce96924e0d8471a5f0d3383e7bc2b34df0264f637aa75c693d87f446ee3d2052b749c4ec97186614eac0e4cd7f85e6b2418a975fe0cfa6d66"' :
                                            'id="xs-controllers-links-module-ImagesModule-2bba973f8110cb9ce96924e0d8471a5f0d3383e7bc2b34df0264f637aa75c693d87f446ee3d2052b749c4ec97186614eac0e4cd7f85e6b2418a975fe0cfa6d66"' }>
                                            <li class="link">
                                                <a href="controllers/ImagesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ImagesModule-2bba973f8110cb9ce96924e0d8471a5f0d3383e7bc2b34df0264f637aa75c693d87f446ee3d2052b749c4ec97186614eac0e4cd7f85e6b2418a975fe0cfa6d66"' : 'data-bs-target="#xs-injectables-links-module-ImagesModule-2bba973f8110cb9ce96924e0d8471a5f0d3383e7bc2b34df0264f637aa75c693d87f446ee3d2052b749c4ec97186614eac0e4cd7f85e6b2418a975fe0cfa6d66"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ImagesModule-2bba973f8110cb9ce96924e0d8471a5f0d3383e7bc2b34df0264f637aa75c693d87f446ee3d2052b749c4ec97186614eac0e4cd7f85e6b2418a975fe0cfa6d66"' :
                                        'id="xs-injectables-links-module-ImagesModule-2bba973f8110cb9ce96924e0d8471a5f0d3383e7bc2b34df0264f637aa75c693d87f446ee3d2052b749c4ec97186614eac0e4cd7f85e6b2418a975fe0cfa6d66"' }>
                                        <li class="link">
                                            <a href="injectables/ImagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailjetModule.html" data-type="entity-link" >MailjetModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailjetModule-70ce0bc417b42942b9343342748e868bc54c005d18b0c649a357579c0bcae1107c823fe54e9e606c8008cd73918c25950b227095721a5ac9a06fa5ff6fbdab60"' : 'data-bs-target="#xs-injectables-links-module-MailjetModule-70ce0bc417b42942b9343342748e868bc54c005d18b0c649a357579c0bcae1107c823fe54e9e606c8008cd73918c25950b227095721a5ac9a06fa5ff6fbdab60"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailjetModule-70ce0bc417b42942b9343342748e868bc54c005d18b0c649a357579c0bcae1107c823fe54e9e606c8008cd73918c25950b227095721a5ac9a06fa5ff6fbdab60"' :
                                        'id="xs-injectables-links-module-MailjetModule-70ce0bc417b42942b9343342748e868bc54c005d18b0c649a357579c0bcae1107c823fe54e9e606c8008cd73918c25950b227095721a5ac9a06fa5ff6fbdab60"' }>
                                        <li class="link">
                                            <a href="injectables/MailjetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailjetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessengerModule.html" data-type="entity-link" >MessengerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MessengerModule-fc99296e9e8d25a7c5513a80eb2d8da004052274d47bab4f201cd8a6b4414846bd0cc628fc26fba3438b6b1e7ac7bf12840d30e874387d1926038e797a18d3f0"' : 'data-bs-target="#xs-controllers-links-module-MessengerModule-fc99296e9e8d25a7c5513a80eb2d8da004052274d47bab4f201cd8a6b4414846bd0cc628fc26fba3438b6b1e7ac7bf12840d30e874387d1926038e797a18d3f0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MessengerModule-fc99296e9e8d25a7c5513a80eb2d8da004052274d47bab4f201cd8a6b4414846bd0cc628fc26fba3438b6b1e7ac7bf12840d30e874387d1926038e797a18d3f0"' :
                                            'id="xs-controllers-links-module-MessengerModule-fc99296e9e8d25a7c5513a80eb2d8da004052274d47bab4f201cd8a6b4414846bd0cc628fc26fba3438b6b1e7ac7bf12840d30e874387d1926038e797a18d3f0"' }>
                                            <li class="link">
                                                <a href="controllers/MessengerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessengerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MessengerModule-fc99296e9e8d25a7c5513a80eb2d8da004052274d47bab4f201cd8a6b4414846bd0cc628fc26fba3438b6b1e7ac7bf12840d30e874387d1926038e797a18d3f0"' : 'data-bs-target="#xs-injectables-links-module-MessengerModule-fc99296e9e8d25a7c5513a80eb2d8da004052274d47bab4f201cd8a6b4414846bd0cc628fc26fba3438b6b1e7ac7bf12840d30e874387d1926038e797a18d3f0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MessengerModule-fc99296e9e8d25a7c5513a80eb2d8da004052274d47bab4f201cd8a6b4414846bd0cc628fc26fba3438b6b1e7ac7bf12840d30e874387d1926038e797a18d3f0"' :
                                        'id="xs-injectables-links-module-MessengerModule-fc99296e9e8d25a7c5513a80eb2d8da004052274d47bab4f201cd8a6b4414846bd0cc628fc26fba3438b6b1e7ac7bf12840d30e874387d1926038e797a18d3f0"' }>
                                        <li class="link">
                                            <a href="injectables/MessengerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessengerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PayementModule.html" data-type="entity-link" >PayementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PayementModule-801fee5e32403c5e7c2bed44408100f24ee6e7dfd61aee60b778a87a528ad1e6382ef13db0bcf1d64ffa7a020d91149e9173846a1691cea58f03ade3f1e5ab6e"' : 'data-bs-target="#xs-controllers-links-module-PayementModule-801fee5e32403c5e7c2bed44408100f24ee6e7dfd61aee60b778a87a528ad1e6382ef13db0bcf1d64ffa7a020d91149e9173846a1691cea58f03ade3f1e5ab6e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PayementModule-801fee5e32403c5e7c2bed44408100f24ee6e7dfd61aee60b778a87a528ad1e6382ef13db0bcf1d64ffa7a020d91149e9173846a1691cea58f03ade3f1e5ab6e"' :
                                            'id="xs-controllers-links-module-PayementModule-801fee5e32403c5e7c2bed44408100f24ee6e7dfd61aee60b778a87a528ad1e6382ef13db0bcf1d64ffa7a020d91149e9173846a1691cea58f03ade3f1e5ab6e"' }>
                                            <li class="link">
                                                <a href="controllers/PayementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PayementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PayementModule-801fee5e32403c5e7c2bed44408100f24ee6e7dfd61aee60b778a87a528ad1e6382ef13db0bcf1d64ffa7a020d91149e9173846a1691cea58f03ade3f1e5ab6e"' : 'data-bs-target="#xs-injectables-links-module-PayementModule-801fee5e32403c5e7c2bed44408100f24ee6e7dfd61aee60b778a87a528ad1e6382ef13db0bcf1d64ffa7a020d91149e9173846a1691cea58f03ade3f1e5ab6e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PayementModule-801fee5e32403c5e7c2bed44408100f24ee6e7dfd61aee60b778a87a528ad1e6382ef13db0bcf1d64ffa7a020d91149e9173846a1691cea58f03ade3f1e5ab6e"' :
                                        'id="xs-injectables-links-module-PayementModule-801fee5e32403c5e7c2bed44408100f24ee6e7dfd61aee60b778a87a528ad1e6382ef13db0bcf1d64ffa7a020d91149e9173846a1691cea58f03ade3f1e5ab6e"' }>
                                        <li class="link">
                                            <a href="injectables/PayementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PayementService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-e3e7662c0b292c22517d70d5b81087aabbc161abe8be3a2a2937cc97a24d0f5be25779c7d16e8114dee9f71efef58b59d73d0916bb822395c5fc658f4a8e9e73"' : 'data-bs-target="#xs-controllers-links-module-PostModule-e3e7662c0b292c22517d70d5b81087aabbc161abe8be3a2a2937cc97a24d0f5be25779c7d16e8114dee9f71efef58b59d73d0916bb822395c5fc658f4a8e9e73"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-e3e7662c0b292c22517d70d5b81087aabbc161abe8be3a2a2937cc97a24d0f5be25779c7d16e8114dee9f71efef58b59d73d0916bb822395c5fc658f4a8e9e73"' :
                                            'id="xs-controllers-links-module-PostModule-e3e7662c0b292c22517d70d5b81087aabbc161abe8be3a2a2937cc97a24d0f5be25779c7d16e8114dee9f71efef58b59d73d0916bb822395c5fc658f4a8e9e73"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-e3e7662c0b292c22517d70d5b81087aabbc161abe8be3a2a2937cc97a24d0f5be25779c7d16e8114dee9f71efef58b59d73d0916bb822395c5fc658f4a8e9e73"' : 'data-bs-target="#xs-injectables-links-module-PostModule-e3e7662c0b292c22517d70d5b81087aabbc161abe8be3a2a2937cc97a24d0f5be25779c7d16e8114dee9f71efef58b59d73d0916bb822395c5fc658f4a8e9e73"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-e3e7662c0b292c22517d70d5b81087aabbc161abe8be3a2a2937cc97a24d0f5be25779c7d16e8114dee9f71efef58b59d73d0916bb822395c5fc658f4a8e9e73"' :
                                        'id="xs-injectables-links-module-PostModule-e3e7662c0b292c22517d70d5b81087aabbc161abe8be3a2a2937cc97a24d0f5be25779c7d16e8114dee9f71efef58b59d73d0916bb822395c5fc658f4a8e9e73"' }>
                                        <li class="link">
                                            <a href="injectables/ImagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' :
                                        'id="xs-injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProfileModule-d647b66fec9e784ce660a21f47829032435d2d8ea933befe3ee194bb67f414a5610ce87e755dd12ef93cc204067f21dcb61da989ae76a76f58f7d13ddbd6b891"' : 'data-bs-target="#xs-controllers-links-module-ProfileModule-d647b66fec9e784ce660a21f47829032435d2d8ea933befe3ee194bb67f414a5610ce87e755dd12ef93cc204067f21dcb61da989ae76a76f58f7d13ddbd6b891"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-d647b66fec9e784ce660a21f47829032435d2d8ea933befe3ee194bb67f414a5610ce87e755dd12ef93cc204067f21dcb61da989ae76a76f58f7d13ddbd6b891"' :
                                            'id="xs-controllers-links-module-ProfileModule-d647b66fec9e784ce660a21f47829032435d2d8ea933befe3ee194bb67f414a5610ce87e755dd12ef93cc204067f21dcb61da989ae76a76f58f7d13ddbd6b891"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProfileModule-d647b66fec9e784ce660a21f47829032435d2d8ea933befe3ee194bb67f414a5610ce87e755dd12ef93cc204067f21dcb61da989ae76a76f58f7d13ddbd6b891"' : 'data-bs-target="#xs-injectables-links-module-ProfileModule-d647b66fec9e784ce660a21f47829032435d2d8ea933befe3ee194bb67f414a5610ce87e755dd12ef93cc204067f21dcb61da989ae76a76f58f7d13ddbd6b891"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-d647b66fec9e784ce660a21f47829032435d2d8ea933befe3ee194bb67f414a5610ce87e755dd12ef93cc204067f21dcb61da989ae76a76f58f7d13ddbd6b891"' :
                                        'id="xs-injectables-links-module-ProfileModule-d647b66fec9e784ce660a21f47829032435d2d8ea933befe3ee194bb67f414a5610ce87e755dd12ef93cc204067f21dcb61da989ae76a76f58f7d13ddbd6b891"' }>
                                        <li class="link">
                                            <a href="injectables/ActivitiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ImagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-97ef5089d737197e3f17a07a06d01b4c1ff6a6d4c6d0ec7df3f3e60df6e371e8e09170d7d115ceee96229072da885b9540f6ae3ce062c701549c8e61a3e45ada"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-97ef5089d737197e3f17a07a06d01b4c1ff6a6d4c6d0ec7df3f3e60df6e371e8e09170d7d115ceee96229072da885b9540f6ae3ce062c701549c8e61a3e45ada"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-97ef5089d737197e3f17a07a06d01b4c1ff6a6d4c6d0ec7df3f3e60df6e371e8e09170d7d115ceee96229072da885b9540f6ae3ce062c701549c8e61a3e45ada"' :
                                            'id="xs-controllers-links-module-ResumesModule-97ef5089d737197e3f17a07a06d01b4c1ff6a6d4c6d0ec7df3f3e60df6e371e8e09170d7d115ceee96229072da885b9540f6ae3ce062c701549c8e61a3e45ada"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-97ef5089d737197e3f17a07a06d01b4c1ff6a6d4c6d0ec7df3f3e60df6e371e8e09170d7d115ceee96229072da885b9540f6ae3ce062c701549c8e61a3e45ada"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-97ef5089d737197e3f17a07a06d01b4c1ff6a6d4c6d0ec7df3f3e60df6e371e8e09170d7d115ceee96229072da885b9540f6ae3ce062c701549c8e61a3e45ada"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-97ef5089d737197e3f17a07a06d01b4c1ff6a6d4c6d0ec7df3f3e60df6e371e8e09170d7d115ceee96229072da885b9540f6ae3ce062c701549c8e61a3e45ada"' :
                                        'id="xs-injectables-links-module-ResumesModule-97ef5089d737197e3f17a07a06d01b4c1ff6a6d4c6d0ec7df3f3e60df6e371e8e09170d7d115ceee96229072da885b9540f6ae3ce062c701549c8e61a3e45ada"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ActivitiesController.html" data-type="entity-link" >ActivitiesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthCheckController.html" data-type="entity-link" >HealthCheckController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ImagesController.html" data-type="entity-link" >ImagesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MessengerController.html" data-type="entity-link" >MessengerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PayementController.html" data-type="entity-link" >PayementController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProfileController.html" data-type="entity-link" >ProfileController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Activity.html" data-type="entity-link" >Activity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Activity-1.html" data-type="entity-link" >Activity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookmarkDto.html" data-type="entity-link" >BookmarkDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookmarkProfileDto.html" data-type="entity-link" >BookmarkProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Bookmarks.html" data-type="entity-link" >Bookmarks</a>
                            </li>
                            <li class="link">
                                <a href="classes/Bookmarks-1.html" data-type="entity-link" >Bookmarks</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeEmailDto.html" data-type="entity-link" >ChangeEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordDto.html" data-type="entity-link" >ChangePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckoutSession.html" data-type="entity-link" >CheckoutSession</a>
                            </li>
                            <li class="link">
                                <a href="classes/Conversation.html" data-type="entity-link" >Conversation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Conversation-1.html" data-type="entity-link" >Conversation</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateActivityDto.html" data-type="entity-link" >CreateActivityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBioDto.html" data-type="entity-link" >CreateBioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePayementDto.html" data-type="entity-link" >CreatePayementDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfileDto.html" data-type="entity-link" >CreateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProFocusDto.html" data-type="entity-link" >CreateProFocusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagsDto.html" data-type="entity-link" >CreateTagsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteUserGalleryDto.html" data-type="entity-link" >DeleteUserGalleryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailChange.html" data-type="entity-link" >EmailChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailChange-1.html" data-type="entity-link" >EmailChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailVerification.html" data-type="entity-link" >EmailVerification</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailVerification-1.html" data-type="entity-link" >EmailVerification</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBookmarksResponse.html" data-type="entity-link" >GetBookmarksResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostDto.html" data-type="entity-link" >GetPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsResponse.html" data-type="entity-link" >GetPostsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserDto.html" data-type="entity-link" >GetUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GlobalExceptionFilter.html" data-type="entity-link" >GlobalExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/HandleChangeEmailDto.html" data-type="entity-link" >HandleChangeEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Image.html" data-type="entity-link" >Image</a>
                            </li>
                            <li class="link">
                                <a href="classes/Image-1.html" data-type="entity-link" >Image</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message-1.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationDto.html" data-type="entity-link" >PaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post-1.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostExtra.html" data-type="entity-link" >PostExtra</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostExtra-1.html" data-type="entity-link" >PostExtra</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostFilterDto.html" data-type="entity-link" >PostFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaClientExceptionFilter.html" data-type="entity-link" >PrismaClientExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDto.html" data-type="entity-link" >ProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductListResponseDto.html" data-type="entity-link" >ProductListResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessionalFocus.html" data-type="entity-link" >ProfessionalFocus</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile-1.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile-2.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileBookmarks.html" data-type="entity-link" >ProfileBookmarks</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileBookmarks-1.html" data-type="entity-link" >ProfileBookmarks</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshToken.html" data-type="entity-link" >RefreshToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshToken-1.html" data-type="entity-link" >RefreshToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPassword.html" data-type="entity-link" >ResetPassword</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPassword-1.html" data-type="entity-link" >ResetPassword</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPwdDto.html" data-type="entity-link" >ResetPwdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume-1.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchQueryDto.html" data-type="entity-link" >SearchQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectAllPostsDto.html" data-type="entity-link" >SelectAllPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectPostsDto.html" data-type="entity-link" >SelectPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/sendFiileDto.html" data-type="entity-link" >sendFiileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendMessageDto.html" data-type="entity-link" >SendMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetUserSettingsDto.html" data-type="entity-link" >SetUserSettingsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePayementDto.html" data-type="entity-link" >UpdatePayementDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfileDto.html" data-type="entity-link" >UpdateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePwdDto.html" data-type="entity-link" >UpdatePwdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/User-1.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivitiesService.html" data-type="entity-link" >ActivitiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AtStrategy.html" data-type="entity-link" >AtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CpuHealthIndicator.html" data-type="entity-link" >CpuHealthIndicator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilerService.html" data-type="entity-link" >FilerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HealthCheckService.html" data-type="entity-link" >HealthCheckService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImagesService.html" data-type="entity-link" >ImagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailjetService.html" data-type="entity-link" >MailjetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessengerService.html" data-type="entity-link" >MessengerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewrelicInterceptor.html" data-type="entity-link" >NewrelicInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PayementService.html" data-type="entity-link" >PayementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaHealthIndicator.html" data-type="entity-link" >PrismaHealthIndicator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RtStrategy.html" data-type="entity-link" >RtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/UserFoundGuard.html" data-type="entity-link" >UserFoundGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserNotFoundGuard.html" data-type="entity-link" >UserNotFoundGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CustomValidationArguments.html" data-type="entity-link" >CustomValidationArguments</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadedMulterFileI.html" data-type="entity-link" >UploadedMulterFileI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});