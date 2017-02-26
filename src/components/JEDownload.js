import React, { Component } from 'react'

import UbuntuJEData from '../data/UbuntuJE.json'

export default class extends Component {
  render() {
    return (
      <div>
        {
          UbuntuJEData.map((edition, index) => {
            return (
              <div key={ index }>
                <div className="row">
                  <div className="col-12">
                    <div className="block block-bordered-lg pt-3 pb-0 text-center">
                      <h2 className="block-title pt-5">{ edition.title }</h2>
                    </div>
                    {
                      edition.versions.map((version, index) => {
                        return (
                          <div className="block py-3" key={ index }>
                            <h3>{ version.version }</h3>
                            <a
                              className="btn btn-takasuki mr-3"
                              href={
                                'https://assets.niceb5y.net/file/ubuntu-je/' + version.version + '/' +
                                edition.id + '-' + version.version + '-desktop-i386.iso'
                              }
                              download
                            >
                              <span className="icon icon-download" aria-hidden="true" /> 32-bit
                            </a>
                            <a
                              className="btn btn-takasuki mr-3"
                              href={
                                'https://assets.niceb5y.net/file/ubuntu-je/' + version.version + '/' +
                                edition.id + '-' + version.version + '-desktop-amd64.iso'
                              }
                              download
                            >
                              <span className="icon icon-download" aria-hidden="true" /> 64-bit
                            </a>
                            <p>
                              <strong>md5 checksum</strong><br />
                              <strong>32-bit</strong> { version.checksum32 }<br />
                              <strong>64-bit</strong> { version.checksum64 }
                            </p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
