---
id: holder
title: "Holder"
displayed_sidebar: essifLabSideBar
scopetag: essifLab
type: concept
termid: holder
formphrases: holder{ss}
status: draft
grouptags:
hoverText: "Holder (functional component): a component that implements the Capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request."
glossaryText: "a component that implements the %%capability^capability%% to handle %%presentation requests^presentation-request%% from a %%peer agent^peer-agent%%, produce the requested data (a presentation) according to its %%principal^principal%%'s %%holder-policy^holder-policy%%, and send that in response to the request."
date: 20210601
---

:::info Editor's note
In other SSI contexts, this term has a different meaning. We intend to rework the framework in such a way that we can use this term in various ways (e.g. as a %%party|party%%, a %%role name|role-name%%, or an %%actor|actor%% that performs the %%role|role%% associated with the %%role name|role-name%%
:::

### Short Description
A **Holder** is an (architectural) function (a functional component in the [eSSIF-Lab functional architecture](../essifLab-fw-conceptual-architecture-framework)) that handles %%presentation requests|presentation-request%% that it receives from %%verifier|verifier%% components (of other %%parties|party%%, but also of its own %%owner|owner%%). Typically, this means looking for the requested data in the %%principal's|principal%% %%wallet|wallet%%, and using it to construct a %%presentation|presentation%% (=response). However, if the %%wallet|wallet%% doesn't have it, the %%holder|holder%% may negotiate a %%transaction|transaction%% with a component of the designated %%issuer|issuer%% for the purpose of obtaining the needed credential, which - when obtained - it can subsequently store in the %%wallet|wallet%% and use in the %%presentation|presentation%%.

### Purpose
The purpose of the Holder component is to handle %%presentation requests|presentation-request%% that it receives from %%verifier|verifier%% components (both of its own %%owner|owner%%, and of other %%parties|party%%), and responding to such requests.

### Criteria
A **Holder** is a component in the [eSSIF-Lab functional architecture](../essifLab-fw-conceptual-architecture-framework) whose function is to handle %%presentation requests|presentation-request%% that it receives from %%verifier|verifier%% components (both of its %%owner|owner%%, and of other %%Parties|party%%).

### Functionality

Typically, a Holder component would access its %%owner|owner%%'s Wallet to check if it has a credential that it can use to construct a Presentation (i.e. response) that satisfies the received request.

It may happen that the Wallet does not have such a credential. However, for every (credential, issuer) pair, the request should specify the URI that is capable of issuing such a credential. If or when the Holder Policy/Preferences permit this, the Holder then requests its Principal's Transaction Data Collector to initiate a new transaction that will get the credential from that issuer, for which a clean transaction form would then consist of one that contains said credential. The Holder would then store it in its Principal's Wallet, and then proceed to service the %%presentation request|presentation-request%% as if it had obtained that credential from its Principal's Wallet.

It may also happen that the Wallet has multiple credentials that satisfy the request, in which case the Holder must choose the one to use for constructing the presentation. Again, the Holder Policy/Preferences will specify how this choice needs to be made, and whether or not this can be done automatically by the Holder. If not, the Holder will need to provide for an interaction with a human Colleague that will make such decisions.

In order to make the Holder component work, a Holder Policy/Preferences object is created by, or on behalf of its Principal, which specifies e.g.:

-   whether or not credentials may be collected 'on the fly';
-   how to choose between credentials that all satisfy a %%presentation request|presentation-request%% (and whether the Holder can make such choices by itself, or whether or not human interaction is required);
-   the kinds of events and data to write to a holder-audit-log.