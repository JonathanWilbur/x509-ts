#!/usr/bin/make
#
# Run this from the root directory like so:
# make -f ./build/Makefile
#
# NOTE:
# "It is traditional to use upper case letters in variable names, but we
# recommend using lower case letters for variable names that serve internal
# purposes in the makefile, and reserving upper case for parameters that
# control implicit rules or for parameters that the user should override
# with command options[...]."
# -- GNU Make Reference Manual, Chapter 6: "How to Use Variables"
#

# These lines are recommended by convention
# See Chapter 15 "Makefile Conventions" of the GNU Make Reference Manual
SHELL = /bin/sh
.SUFFIXES:

# The name SRCDIR is chosen because DESTDIR is a standard variable name.
# It should not point to the ./source directory, but rather, the root
# of this entire package. Note that this differs from the lowercase
# 'srcdir', which is the location where the source files are installed.
SRCDIR = .
DESTDIR = ./dist

PACKAGE_SLUG = x509
VERSION := $(shell cat $(SRCDIR)/version)

all : web_libraries node_libraries declarations

web_libraries : web_$(PACKAGE_SLUG)

web_$(PACKAGE_SLUG) : $(DESTDIR)/web/$(PACKAGE_SLUG).js
$(DESTDIR)/web/$(PACKAGE_SLUG).js : $(SRCDIR)/build/webpack/web.webpack.js
	webpack \
	--config $(SRCDIR)/build/webpack/web.webpack.js \
	--output-path $(abspath $(DESTDIR))/web

node_libraries : node_$(PACKAGE_SLUG)

node_$(PACKAGE_SLUG) : $(DESTDIR)/node/$(PACKAGE_SLUG).js
$(DESTDIR)/node/$(PACKAGE_SLUG).js : $(SRCDIR)/build/webpack/node.webpack.js
	webpack \
	--config $(SRCDIR)/build/webpack/node.webpack.js \
	--output-path $(abspath $(DESTDIR))/node

declarations :
	tsc \
	--declaration \
	--emitDeclarationOnly \
	--target ESNext \
	--lib ESNext,DOM \
	--declarationDir ./dist/types $<