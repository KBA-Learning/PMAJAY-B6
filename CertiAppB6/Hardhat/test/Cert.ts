import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { network } from "hardhat";

import { getContractAddress } from "viem";

describe("Cert", async function () {
  const { viem, networkHelpers } = await network.create();

  async function deployContract() {
    const [admin, other] = await viem.getWalletClients();
    console.log("Admin", admin.account.address);

    const cert = await viem.deployContract("Cert");
    console.log("Contract Address", cert.address);

    return { cert, admin, other };
  }

  it("should be deployed by admin", async function () {
    const { cert, admin } = await networkHelpers.loadFixture(deployContract);

    const cA = getContractAddress({
      from: admin.account.address,
      nonce: 0n,
    });

    console.log("COntract Address", cA);

    assert.equal(cert.address, cA.toLowerCase());
  });

  it("should be able to read and write data", async function () {
    const { cert, admin } = await networkHelpers.loadFixture(deployContract);

    const hash = await cert.write.issue([
      123n,
      "Lekshmi",
      "CED",
      "A",
      "23/05/2026",
    ]);

    const certDetails = await cert.read.Certificates([123n]);
    console.log("Certificate Details", certDetails);

    assert.equal(certDetails[0], "Anju");
    assert.equal(certDetails[1], "CED");
    assert.equal(certDetails[2], "A");
    assert.equal(certDetails[3], "23/05/2026");
  });

  it("shouldn't be written by non-admin", async function () {
    const { cert,admin, other } = await networkHelpers.loadFixture(deployContract);

    await viem.assertions.revertWith(
      cert.write.issue([12n, "Anju", "CBA", "A", "23/04/2026"], {
        account: admin.account,
      }),
      "Only admin can deploy",
    );
  });
});
