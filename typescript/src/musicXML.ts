/**
 * Do not modify this automatically generated file!!!
 * 
 * Generated from "MusicXML".
 * Portions copyright (C) 2015 Josh Netterfield.
 * Part of the ripieno-musicxml project to make MusicXML more accessible.
 * 
 * MusicXML™ Version 3.0
 * 
 * Copyright © 2004-2011 MakeMusic, Inc.
 * http://www.makemusic.com/
 * 
 * This MusicXML™ work is being provided by the copyright
 * holder under the MusicXML Public License Version 3.0,
 * available from:
 * 
 * http://www.musicxml.org/dtds/license.html
 * This file contains multiple DTDs.
 */

/* tslint:disable */
/// <reference path="./typings/node/node.d.ts" />
import assert = require("assert");

function popFront(t: string) {
    t.slice(1);
    return t;
}

export interface AccOrText {
    acc?: AccidentalText;
    text?: DisplayText;
}

export interface TextArray extends Array<AccOrText> {}

export interface EncodingDate extends CalendarDate {}

/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface Mode extends String {}

/**
 * The appearance element controls general graphical
 * settings for the music's final form appearance on a
 * printed page of display. This includes support
 * for line widths, definitions for note sizes, and standard
 * distances between notation elements, plus an extension
 * element for other aspects of appearance.
 * 
 * The line-width element indicates the width of a line type
 * in tenths. The type attribute defines what type of line is
 * being defined. Values include beam, bracket, dashes,
 * enclosure, ending, extend, heavy barline, leger,
 * light barline, octave shift, pedal, slur middle, slur tip,
 * staff, stem, tie middle, tie tip, tuplet bracket, and
 * wedge. The text content is expressed in tenths.
 * 
 * The note-size element indicates the percentage of the
 * regular note size to use for notes with a cue and large
 * size as defined in the type element. The grace type is
 * used for notes of cue size that that include a grace
 * element. The cue type is used for all other notes with
 * cue size, whether defined explicitly or implicitly via a
 * cue element. The large type is used for notes of large
 * size. The text content represent the numeric percentage.
 * A value of 100 would be identical to the size of a regular
 * note as defined by the music font.
 * 
 * The distance element represents standard distances between
 * notation elements in tenths. The type attribute defines what
 * type of distance is being defined. Values include hyphen
 * (for hyphens in lyrics) and beam.
 * 
 * The other-appearance element is used to define any
 * graphical settings not yet in the current version of the
 * MusicXML format. This allows extended representation,
 * though without application interoperability.
 */
export interface OtherAppearance extends String {}

/**
 * The tuning-step, tuning-alter, and tuning-octave elements
 * are represented like the step, alter, and octave elements,
 * with different names to reflect their different function.
 * They are used in the staff-tuning and accord elements.
 */
export interface TuningStep extends String {}

export interface OtherDynamics extends String {}

export interface Voice extends String {}

/**
 * These elements are used both in the time-modification and
 * metronome-tuplet elements. The actual-notes element
 * describes how many notes are played in the time usually
 * occupied by the number of normal-notes. If the normal-notes
 * type is different than the current note type (e.g., a
 * quarter note within an eighth note triplet), then the
 * normal-notes type (e.g. eighth) is specified in the
 * normal-type and normal-dot elements. The content of the
 * actual-notes and normal-notes elements ia a non-negative
 * integer.
 */
export interface NormalType extends String {}

/**
 * A string describing a software.
 */
export interface Software extends String {}

/**
 * 
 * Encoding contains information about who did the digital
 * encoding, when, with what software, and in what aspects.
 * Standard type values for the encoder element are music,
 * words, and arrangement, but other types may be used. The
 * type attribute is only needed when there are multiple
 * encoder elements.
 * 
 * The supports element indicates if the encoding supports
 * a particular MusicXML element. This is recommended for
 * elements like beam, stem, and accidental, where the
 * absence of an element is ambiguous if you do not know
 * if the encoding supports that element. For Version 2.0,
 * the supports element is expanded to allow programs to
 * indicate support for particular attributes or particular
 * values. This lets applications communicate, for example,
 * that all system and/or page breaks are contained in the
 * MusicXML file.
 */
export interface EncodingDescription extends String {}

/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface KeyStep extends String {}

/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface KeyAlter extends String {}

/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface KeyAccidental extends String {}

/**
 * BUG: Is number but must support compound time. Time signatures are represented by two elements. The
 * beats element indicates the number of beats, as found in
 * the numerator of a time signature. The beat-type element
 * indicates the beat unit, as found in the denominator of
 * a time signature.
 * 
 * Multiple pairs of beats and beat-type elements are used for
 * composite time signatures with multiple denominators, such
 * as 2/4 + 3/8. A composite such as 3+2/8 requires only one
 * beats/beat-type pair.
 * 
 * The interchangeable element is used to represent the second
 * in a pair of interchangeable dual time signatures, such as
 * the 6/8 in 3/4 (6/8). A separate symbol attribute value is
 * available compared to the time element's symbol attribute,
 * which applies to the first of the dual time signatures.
 * The time-relation element indicates the symbol used to
 * represent the interchangeable aspect of the time signature.
 * Valid values are parentheses, bracket, equals, slash, space,
 * and hyphen.
 * 
 * A senza-misura element explicitly indicates that no time
 * signature is present. The optional element content
 * indicates the symbol to be used, if any, such as an X.
 * The time element's symbol attribute is not used when a
 * senza-misura element is present.
 * 
 * The print-object attribute allows a time signature to be
 * specified but not printed, as is the case for excerpts
 * from the middle of a score. The value is "yes" if
 * not present. The optional number attribute refers to staff
 * numbers within the part, from top to bottom on the system.
 * If absent, the time signature applies to all staves in the
 * part.
 */
export interface Beats extends String {}

/**
 * Time signatures are represented by two elements. The
 * beats element indicates the number of beats, as found in
 * the numerator of a time signature. The beat-type element
 * indicates the beat unit, as found in the denominator of
 * a time signature.
 * 
 * Multiple pairs of beats and beat-type elements are used for
 * composite time signatures with multiple denominators, such
 * as 2/4 + 3/8. A composite such as 3+2/8 requires only one
 * beats/beat-type pair.
 * 
 * The interchangeable element is used to represent the second
 * in a pair of interchangeable dual time signatures, such as
 * the 6/8 in 3/4 (6/8). A separate symbol attribute value is
 * available compared to the time element's symbol attribute,
 * which applies to the first of the dual time signatures.
 * The time-relation element indicates the symbol used to
 * represent the interchangeable aspect of the time signature.
 * Valid values are parentheses, bracket, equals, slash, space,
 * and hyphen.
 * 
 * A senza-misura element explicitly indicates that no time
 * signature is present. The optional element content
 * indicates the symbol to be used, if any, such as an X.
 * The time element's symbol attribute is not used when a
 * senza-misura element is present.
 * 
 * The print-object attribute allows a time signature to be
 * specified but not printed, as is the case for excerpts
 * from the middle of a score. The value is "yes" if
 * not present. The optional number attribute refers to staff
 * numbers within the part, from top to bottom on the system.
 * If absent, the time signature applies to all staves in the
 * part.
 */
export interface BeatType extends String {}

/**
 * Time signatures are represented by two elements. The
 * beats element indicates the number of beats, as found in
 * the numerator of a time signature. The beat-type element
 * indicates the beat unit, as found in the denominator of
 * a time signature.
 * 
 * Multiple pairs of beats and beat-type elements are used for
 * composite time signatures with multiple denominators, such
 * as 2/4 + 3/8. A composite such as 3+2/8 requires only one
 * beats/beat-type pair.
 * 
 * The interchangeable element is used to represent the second
 * in a pair of interchangeable dual time signatures, such as
 * the 6/8 in 3/4 (6/8). A separate symbol attribute value is
 * available compared to the time element's symbol attribute,
 * which applies to the first of the dual time signatures.
 * The time-relation element indicates the symbol used to
 * represent the interchangeable aspect of the time signature.
 * Valid values are parentheses, bracket, equals, slash, space,
 * and hyphen.
 * 
 * A senza-misura element explicitly indicates that no time
 * signature is present. The optional element content
 * indicates the symbol to be used, if any, such as an X.
 * The time element's symbol attribute is not used when a
 * senza-misura element is present.
 * 
 * The print-object attribute allows a time signature to be
 * specified but not printed, as is the case for excerpts
 * from the middle of a score. The value is "yes" if
 * not present. The optional number attribute refers to staff
 * numbers within the part, from top to bottom on the system.
 * If absent, the time signature applies to all staves in the
 * part.
 */
export interface TimeRelation extends String {}

/**
 * Time signatures are represented by two elements. The
 * beats element indicates the number of beats, as found in
 * the numerator of a time signature. The beat-type element
 * indicates the beat unit, as found in the denominator of
 * a time signature.
 * 
 * Multiple pairs of beats and beat-type elements are used for
 * composite time signatures with multiple denominators, such
 * as 2/4 + 3/8. A composite such as 3+2/8 requires only one
 * beats/beat-type pair.
 * 
 * The interchangeable element is used to represent the second
 * in a pair of interchangeable dual time signatures, such as
 * the 6/8 in 3/4 (6/8). A separate symbol attribute value is
 * available compared to the time element's symbol attribute,
 * which applies to the first of the dual time signatures.
 * The time-relation element indicates the symbol used to
 * represent the interchangeable aspect of the time signature.
 * Valid values are parentheses, bracket, equals, slash, space,
 * and hyphen.
 * 
 * A senza-misura element explicitly indicates that no time
 * signature is present. The optional element content
 * indicates the symbol to be used, if any, such as an X.
 * The time element's symbol attribute is not used when a
 * senza-misura element is present.
 * 
 * The print-object attribute allows a time signature to be
 * specified but not printed, as is the case for excerpts
 * from the middle of a score. The value is "yes" if
 * not present. The optional number attribute refers to staff
 * numbers within the part, from top to bottom on the system.
 * If absent, the time signature applies to all staves in the
 * part.
 */
export interface SenzaMisura extends String {}

/**
 * Instruments are only used if more than one instrument is
 * represented in the part (e.g., oboe I and II where they
 * play together most of the time). If absent, a value of 1
 * is assumed.
 */
export interface Instruments extends String {}

/**
 * Clefs are represented by the sign, line, and
 * clef-octave-change elements. Sign values include G, F, C,
 * percussion, TAB, jianpu, and none. Line numbers are
 * counted from the bottom of the staff. Standard values are
 * 2 for the G sign (treble clef), 4 for the F sign (bass clef),
 * 3 for the C sign (alto clef) and 5 for TAB (on a 6-line
 * staff). The clef-octave-change element is used for
 * transposing clefs (e.g., a treble clef for tenors would
 * have a clef-octave-change value of -1). The optional
 * number attribute refers to staff numbers within the part,
 * from top to bottom on the system. A value of 1 is
 * assumed if not present.
 * 
 * The jianpu sign indicates that the music that follows
 * should be in jianpu numbered notation, just as the TAB
 * sign indicates that the music that follows should be in
 * tablature notation. Unlike TAB, a jianpu sign does not
 * correspond to a visual clef notation.
 * 
 * Sometimes clefs are added to the staff in non-standard
 * line positions, either to indicate cue passages, or when
 * there are multiple clefs present simultaneously on one
 * staff. In this situation, the additional attribute is set to
 * "yes" and the line value is ignored. The size attribute
 * is used for clefs where the additional attribute is "yes".
 * It is typically used to indicate cue clefs.
 * 
 * Sometimes clefs at the start of a measure need to appear
 * after the barline rather than before, as for cues or for
 * use after a repeated section. The after-barline attribute
 * is set to "yes" in this situation. The attribute is ignored
 * for mid-measure clefs.
 * 
 * Clefs appear at the start of each system unless the
 * print-object attribute has been set to "no" or the
 * additional attribute has been set to "yes".
 */
export interface Sign extends String {}

/**
 * Clefs are represented by the sign, line, and
 * clef-octave-change elements. Sign values include G, F, C,
 * percussion, TAB, jianpu, and none. Line numbers are
 * counted from the bottom of the staff. Standard values are
 * 2 for the G sign (treble clef), 4 for the F sign (bass clef),
 * 3 for the C sign (alto clef) and 5 for TAB (on a 6-line
 * staff). The clef-octave-change element is used for
 * transposing clefs (e.g., a treble clef for tenors would
 * have a clef-octave-change value of -1). The optional
 * number attribute refers to staff numbers within the part,
 * from top to bottom on the system. A value of 1 is
 * assumed if not present.
 * 
 * The jianpu sign indicates that the music that follows
 * should be in jianpu numbered notation, just as the TAB
 * sign indicates that the music that follows should be in
 * tablature notation. Unlike TAB, a jianpu sign does not
 * correspond to a visual clef notation.
 * 
 * Sometimes clefs are added to the staff in non-standard
 * line positions, either to indicate cue passages, or when
 * there are multiple clefs present simultaneously on one
 * staff. In this situation, the additional attribute is set to
 * "yes" and the line value is ignored. The size attribute
 * is used for clefs where the additional attribute is "yes".
 * It is typically used to indicate cue clefs.
 * 
 * Sometimes clefs at the start of a measure need to appear
 * after the barline rather than before, as for cues or for
 * use after a repeated section. The after-barline attribute
 * is set to "yes" in this situation. The attribute is ignored
 * for mid-measure clefs.
 * 
 * Clefs appear at the start of each system unless the
 * print-object attribute has been set to "no" or the
 * additional attribute has been set to "yes".
 */
export interface ClefOctaveChange extends String {}

/**
 * The staff-details element is used to indicate different
 * types of staves. The staff-type element can be ossia,
 * cue, editorial, regular, or alternate. An alternate staff
 * indicates one that shares the same musical data as the
 * prior staff, but displayed differently (e.g., treble and
 * bass clef, standard notation and tab). The staff-lines
 * element specifies the number of lines for a non 5-line
 * staff. The staff-tuning and capo elements are used to
 * specify tuning when using tablature notation. The optional
 * number attribute specifies the staff number from top to
 * bottom on the system, as with clef. The optional show-frets
 * attribute indicates whether to show tablature frets as
 * numbers (0, 1, 2) or letters (a, b, c). The default choice
 * is numbers. The print-object attribute is used to indicate
 * when a staff is not printed in a part, usually in large
 * scores where empty parts are omitted. It is yes by default.
 * If print-spacing is yes while print-object is no, the score
 * is printed in cutaway format where vertical space is left
 * for the empty part.
 */
export interface StaffType extends String {}

/**
 * The capo element indicates at which fret a capo should
 * be placed on a fretted instrument. This changes the
 * open tuning of the strings specified by staff-tuning
 * by the specified number of half-steps.
 */
export interface Capo extends String {}

/**
 * If the part is being encoded for a transposing instrument
 * in written vs. concert pitch, the transposition must be
 * encoded in the transpose element. The transpose element
 * represents what must be added to the written pitch to get
 * the correct sounding pitch.
 * 
 * The transposition is represented by chromatic steps
 * (required) and three optional elements: diatonic pitch
 * steps, octave changes, and doubling an octave down. The
 * chromatic and octave-change elements are numeric values
 * added to the encoded pitch data to create the sounding
 * pitch. The diatonic element is also numeric and allows
 * for correct spelling of enharmonic transpositions.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the
 * transposition applies to all staves in the part. Per-staff
 * transposition is most often used in parts that represent
 * multiple instruments.
 */
export interface Diatonic extends String {}

/**
 * If the part is being encoded for a transposing instrument
 * in written vs. concert pitch, the transposition must be
 * encoded in the transpose element. The transpose element
 * represents what must be added to the written pitch to get
 * the correct sounding pitch.
 * 
 * The transposition is represented by chromatic steps
 * (required) and three optional elements: diatonic pitch
 * steps, octave changes, and doubling an octave down. The
 * chromatic and octave-change elements are numeric values
 * added to the encoded pitch data to create the sounding
 * pitch. The diatonic element is also numeric and allows
 * for correct spelling of enharmonic transpositions.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the
 * transposition applies to all staves in the part. Per-staff
 * transposition is most often used in parts that represent
 * multiple instruments.
 */
export interface Chromatic extends String {}

/**
 * If the part is being encoded for a transposing instrument
 * in written vs. concert pitch, the transposition must be
 * encoded in the transpose element. The transpose element
 * represents what must be added to the written pitch to get
 * the correct sounding pitch.
 * 
 * The transposition is represented by chromatic steps
 * (required) and three optional elements: diatonic pitch
 * steps, octave changes, and doubling an octave down. The
 * chromatic and octave-change elements are numeric values
 * added to the encoded pitch data to create the sounding
 * pitch. The diatonic element is also numeric and allows
 * for correct spelling of enharmonic transpositions.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the
 * transposition applies to all staves in the part. Per-staff
 * transposition is most often used in parts that represent
 * multiple instruments.
 */
export interface OctaveChange extends String {}

/**
 * The slash-type and slash-dot elements are optional children
 * of the beat-repeat and slash elements. They have the same
 * values as the type and dot elements, and define what the
 * beat is for the display of repetition marks. If not present,
 * the beat is based on the current time signature.
 */
export interface SlashType extends String {}

/**
 * The unpitched element indicates musical elements that are
 * notated on the staff but lack definite pitch, such as
 * unpitched percussion and speaking voice. Like notes, it
 * uses step and octave elements to indicate placement on the
 * staff, following the current clef. If percussion clef is
 * used, the display-step and display-octave elements are
 * interpreted as if in treble clef, with a G in octave 4 on
 * line 2. If not present, the note is placed on the middle
 * line of the staff, generally used for a one-line staff.
 */
export interface DisplayStep extends String {}

/**
 * The unpitched element indicates musical elements that are
 * notated on the staff but lack definite pitch, such as
 * unpitched percussion and speaking voice. Like notes, it
 * uses step and octave elements to indicate placement on the
 * staff, following the current clef. If percussion clef is
 * used, the display-step and display-octave elements are
 * interpreted as if in treble clef, with a G in octave 4 on
 * line 2. If not present, the note is placed on the middle
 * line of the staff, generally used for a one-line staff.
 */
export interface DisplayOctave extends String {}

/**
 * The bend element is used in guitar and tablature. The
 * bend-alter element indicates the number of steps in the
 * bend, similar to the alter element. As with the alter
 * element, numbers like 0.5 can be used to indicate
 * microtones. Negative numbers indicate pre-bends or
 * releases; the pre-bend and release elements are used
 * to distinguish what is intended. A with-bar element
 * indicates that the bend is to be done at the bridge
 * with a whammy or vibrato bar. The content of the
 * element indicates how this should be notated.
 */
export interface BendAlter extends String {}

/**
 * The hole element represents the symbols used for woodwind
 * and brass fingerings as well as other notations. The content
 * of the optional hole-type element indicates what the hole
 * symbol represents in terms of instrument fingering or other
 * techniques. The hole-closed element represents whether the
 * hole is closed, open, or half-open. Valid element values are
 * yes, no, and half. The optional location attribute indicates
 * which portion of the hole is filled in when the element value
 * is half. The optional hole-shape element indicates the shape
 * of the hole symbol; the default is a circle.
 */
export interface HoleType extends String {}

/**
 * The hole element represents the symbols used for woodwind
 * and brass fingerings as well as other notations. The content
 * of the optional hole-type element indicates what the hole
 * symbol represents in terms of instrument fingering or other
 * techniques. The hole-closed element represents whether the
 * hole is closed, open, or half-open. Valid element values are
 * yes, no, and half. The optional location attribute indicates
 * which portion of the hole is filled in when the element value
 * is half. The optional hole-shape element indicates the shape
 * of the hole symbol; the default is a circle.
 */
export interface HoleShape extends String {}

/**
 * The arrow element represents an arrow used for a musical
 * technical indication. Straight arrows are represented with
 * an arrow-direction element and an optional arrow-style
 * element. Circular arrows are represented with a
 * circular-arrow element. Descriptive values use Unicode
 * arrow terminology.
 * 
 * Values for the arrow-direction element are left, up, right,
 * down, northwest, northeast, southeast, southwest, left right,
 * up down, northwest southeast, northeast southwest, and other.
 * 
 * Values for the arrow-style element are single, double,
 * filled, hollow, paired, combined, and other. Filled and
 * hollow arrows indicate polygonal single arrows. Paired
 * arrows are duplicate single arrows in the same direction.
 * Combined arrows apply to double direction arrows like
 * left right, indicating that an arrow in one direction
 * should be combined with an arrow in the other direction.
 * 
 * Values for the circular-arrow element are clockwise and
 * anticlockwise.
 */
export interface ArrowDirection extends String {}

/**
 * The arrow element represents an arrow used for a musical
 * technical indication. Straight arrows are represented with
 * an arrow-direction element and an optional arrow-style
 * element. Circular arrows are represented with a
 * circular-arrow element. Descriptive values use Unicode
 * arrow terminology.
 * 
 * Values for the arrow-direction element are left, up, right,
 * down, northwest, northeast, southeast, southwest, left right,
 * up down, northwest southeast, northeast southwest, and other.
 * 
 * Values for the arrow-style element are single, double,
 * filled, hollow, paired, combined, and other. Filled and
 * hollow arrows indicate polygonal single arrows. Paired
 * arrows are duplicate single arrows in the same direction.
 * Combined arrows apply to double direction arrows like
 * left right, indicating that an arrow in one direction
 * should be combined with an arrow in the other direction.
 * 
 * Values for the circular-arrow element are clockwise and
 * anticlockwise.
 */
export interface ArrowStyle extends String {}

/**
 * The arrow element represents an arrow used for a musical
 * technical indication. Straight arrows are represented with
 * an arrow-direction element and an optional arrow-style
 * element. Circular arrows are represented with a
 * circular-arrow element. Descriptive values use Unicode
 * arrow terminology.
 * 
 * Values for the arrow-direction element are left, up, right,
 * down, northwest, northeast, southeast, southwest, left right,
 * up down, northwest southeast, northeast southwest, and other.
 * 
 * Values for the arrow-style element are single, double,
 * filled, hollow, paired, combined, and other. Filled and
 * hollow arrows indicate polygonal single arrows. Paired
 * arrows are duplicate single arrows in the same direction.
 * Combined arrows apply to double direction arrows like
 * left right, indicating that an arrow in one direction
 * should be combined with an arrow in the other direction.
 * 
 * Values for the circular-arrow element are clockwise and
 * anticlockwise.
 */
export interface CircularArrow extends String {}

export interface BeatUnit extends String {}

export interface MetronomeRelation extends String {}

export interface MetronomeType extends String {}

export interface PedalStep extends String {}

export interface PedalAlter extends String {}

export interface AccordionMiddle extends String {}

/**
 * The glass element represents pictograms for glass
 * percussion instruments. The one valid value is
 * wind chimes.
 */
export interface Glass extends String {}

/**
 * The metal element represents pictograms for metal
 * percussion instruments. Valid values are almglocken, bell,
 * bell plate, brake drum, Chinese cymbal, cowbell,
 * crash cymbals, crotale, cymbal tongs, domed gong,
 * finger cymbals, flexatone, gong, hi-hat, high-hat cymbals,
 * handbell, sistrum, sizzle cymbal, sleigh bells,
 * suspended cymbal, tam tam, triangle, and Vietnamese hat.
 * The hi-hat value refers to a pictogram like Stone's
 * high-hat cymbals, but without the long vertical line
 * at the bottom.
 */
export interface Metal extends String {}

/**
 * The wood element represents pictograms for wood
 * percussion instruments. Valid values are board clapper,
 * cabasa, castanets, claves, guiro, log drum, maraca,
 * maracas, ratchet, sandpaper blocks, slit drum,
 * temple block, vibraslap, and wood block. The maraca
 * and maracas values distinguish the one- and two-maraca
 * versions of the pictogram. The castanets and vibraslap
 * values are in addition to Stone's list.
 */
export interface Wood extends String {}

/**
 * The pitched element represents pictograms for pitched
 * percussion instruments. Valid values are chimes,
 * glockenspiel, mallet, marimba, tubular chimes, vibraphone,
 * and xylophone. The chimes and tubular chimes values
 * distinguish the single-line and double-line versions of the
 * pictogram. The mallet value is in addition to Stone's list.
 */
export interface Pitched extends String {}

/**
 * The membrane element represents pictograms for membrane
 * percussion instruments. Valid values are bass drum,
 * bass drum on side, bongos, conga drum, goblet drum,
 * military drum, snare drum, snare drum snares off,
 * tambourine, tenor drum, timbales, and tomtom. The
 * goblet drum value is in addition to Stone's list.
 */
export interface Membrane extends String {}

/**
 * The effect element represents pictograms for sound effect
 * percussion instruments. Valid values are anvil, auto horn,
 * bird whistle, cannon, duck call, gun shot, klaxon horn,
 * lions roar, police whistle, siren, slide whistle,
 * thunder sheet, wind machine, and wind whistle. The cannon
 * value is in addition to Stone's list.
 */
export interface Effect extends String {}

export interface StickType extends String {}

export interface StickMaterial extends String {}

/**
 * The stick-location element represents pictograms for the
 * location of sticks, beaters, or mallets on cymbals, gongs,
 * drums, and other instruments. Valid values are center,
 * rim, cymbal bell, and cymbal edge.
 */
export interface StickLocation extends String {}

/**
 * The other-percussion element represents percussion
 * pictograms not defined elsewhere.
 */
export interface OtherPercussion extends String {}

export interface FrameStrings extends String {}

export interface FrameFrets extends String {}

/**
 * Works and movements are optionally identified by number
 * and title. The work element also may indicate a link
 * to the opus document that composes multiple movements
 * into a collection.
 */
export interface WorkNumber extends String {}

/**
 * Works and movements are optionally identified by number
 * and title. The work element also may indicate a link
 * to the opus document that composes multiple movements
 * into a collection.
 */
export interface WorkTitle extends String {}

/**
 *     Works and movements are optionally identified by number
 * and title. The work element also may indicate a link
 * to the opus document that composes multiple movements
 * into a collection.
 */
export interface MovementNumber extends String {}

/**
 *     Works and movements are optionally identified by number
 * and title. The work element also may indicate a link
 * to the opus document that composes multiple movements
 * into a collection.
 */
export interface MovementTitle extends String {}

/**
 * The credit-type element, new in Version 3.0, indicates the
 * purpose behind a credit. Multiple types of data may be
 * combined in a single credit, so multiple elements may be
 * used. Standard values include page number, title, subtitle,
 * composer, arranger, lyricist, and rights.
 */
export interface CreditType extends String {}

/**
 *     The group element allows the use of different versions of
 * the part for different purposes. Typical values include
 * score, parts, sound, and data. Ordering information that is
 * directly encoded in MuseData can be derived from the
 * ordering within a MusicXML score or opus.
 */
export interface Group extends String {}

export interface InstrumentName extends String {}

export interface InstrumentAbbreviation extends String {}

export interface InstrumentSound extends String {}

export interface Ensemble extends String {}

export interface VirtualLibrary extends String {}

export interface VirtualName extends String {}

/**
 * Calendar dates are represented yyyy-mm-dd format, following
 * ISO 8601.
 */
export interface CalendarDate {
    month: number;
    day: number;
    year: number;
}

/**
 * Calendar dates are represented yyyy-mm-dd format, following
 * ISO 8601.
 */
export interface CalendarDateComplete {
    month: number;
    day: number;
    year: number;
}


/**
 * The tenths entity is a number representing tenths of
 * interline space (positive or negative) for use in
 * attributes. The layout-tenths entity is the same for
 * use in elements. Both integer and decimal values are
 * allowed, such as 5 for a half space and 2.5 for a
 * quarter space. Interline space is measured from the
 * middle of a staff line.
 */
export interface Tenths extends String {}

/**
 * The tenths entity is a number representing tenths of
 * interline space (positive or negative) for use in
 * attributes. The layout-tenths entity is the same for
 * use in elements. Both integer and decimal values are
 * allowed, such as 5 for a half space and 2.5 for a
 * quarter space. Interline space is measured from the
 * middle of a staff line.
 */
export interface LayoutTenths extends String {}

/**
 * The start-stop and start-stop-continue entities are used
 * for musical elements that can either start or stop, such
 * as slurs, tuplets, and wedges. The start-stop-continue
 * entity is used when there is a need to refer to an
 * intermediate point in the symbol, as for complex slurs
 * or for specifying formatting of symbols across system
 * breaks. The start-stop-single entity is used when the same
 * element is used for multi-note and single-note notations,
 * as for tremolos.
 * The values of start, stop, and continue refer to how an
 * element appears in musical score order, not in MusicXML
 * document order. An element with a stop attribute may
 * precede the corresponding element with a start attribute
 * within a MusicXML document. This is particularly common
 * in multi-staff music. For example, the stopping point for
 * a slur may appear in staff 1 before the starting point for
 * the slur appears in staff 2 later in the document.
 */
export enum StartStop {
    Start = 0,
    Stop = 1
}

/**
 * The start-stop and start-stop-continue entities are used
 * for musical elements that can either start or stop, such
 * as slurs, tuplets, and wedges. The start-stop-continue
 * entity is used when there is a need to refer to an
 * intermediate point in the symbol, as for complex slurs
 * or for specifying formatting of symbols across system
 * breaks. The start-stop-single entity is used when the same
 * element is used for multi-note and single-note notations,
 * as for tremolos.
 * The values of start, stop, and continue refer to how an
 * element appears in musical score order, not in MusicXML
 * document order. An element with a stop attribute may
 * precede the corresponding element with a start attribute
 * within a MusicXML document. This is particularly common
 * in multi-staff music. For example, the stopping point for
 * a slur may appear in staff 1 before the starting point for
 * the slur appears in staff 2 later in the document.
 */
export enum StartStopContinue {
    Start = 0,
    Stop = 1,
    Continue = 2
}

/**
 * The start-stop and start-stop-continue entities are used
 * for musical elements that can either start or stop, such
 * as slurs, tuplets, and wedges. The start-stop-continue
 * entity is used when there is a need to refer to an
 * intermediate point in the symbol, as for complex slurs
 * or for specifying formatting of symbols across system
 * breaks. The start-stop-single entity is used when the same
 * element is used for multi-note and single-note notations,
 * as for tremolos.
 * The values of start, stop, and continue refer to how an
 * element appears in musical score order, not in MusicXML
 * document order. An element with a stop attribute may
 * precede the corresponding element with a start attribute
 * within a MusicXML document. This is particularly common
 * in multi-staff music. For example, the stopping point for
 * a slur may appear in staff 1 before the starting point for
 * the slur appears in staff 2 later in the document.
 */
export enum StartStopSingle {
    Single = 3,
    Start = 0,
    Stop = 1
}

/**
 * The yes-no entity is used for boolean-like attributes.
 */

/**
 * The yes-no-number entity is used for attributes that can
 * be either boolean or numeric values. Values can be "yes",
 * "no", or numbers.
 */
export interface YesNoNumber {
    yesNo: boolean;
    isYesNo: boolean;
    num: number;
}

/**
 * The yes-no-number entity is used for attributes that can
 * be either boolean or numeric values. Values can be "yes",
 * "no", or numbers.
 */
export interface YesNoNumberComplete {
    yesNo: boolean;
    isYesNo: boolean;
    num: number;
}


/**
 * The symbol-size entity is used to indicate full vs.
 * cue-sized vs. oversized symbols. The large value
 * for oversized symbols was added in version 1.1.
 */
export enum SymbolSize {
    Unspecified = 0,
    Full = 1,
    Cue = 2,
    Large = 3
}

/**
 * The above-below type is used to indicate whether one
 * element appears above or below another element.
 */
export enum AboveBelow {
    Above = 1,
    Below = 2,
    Unspecified = 0
}

export enum OverUnder {
    Over = 1,
    Under = 2,
    Unspecified = 0
}

/**
 * The up-down entity is used for arrow direction,
 * indicating which way the tip is pointing.
 */
export enum UpDown {
    Down = 1,
    Up = 0
}

/**
 * The top-bottom entity is used to indicate the top or
 * bottom part of a vertical shape like non-arpeggiate.
 */
export enum TopBottom {
    Top = 0,
    Bottom = 1
}

/**
 * The left-right entity is used to indicate whether one
 * element appears to the left or the right of another
 * element.
 */
export enum LeftRight {
    Right = 1,
    Left = 0
}

/**
 * The number-of-lines entity is used to specify the
 * number of lines in text decoration attributes.
 */
export function verifyNumberOfLines(m: number) {
    assert(m >= 0 && m <= 3);
}

export function verifyRotation(m: number) {
    assert(m >= -180 && m <= 180);
}

/**
 * The enclosure-shape entity describes the shape and
 * presence / absence of an enclosure around text. A bracket
 * enclosure is similar to a rectangle with the bottom line
 * missing, as is common in jazz notation.
 */
export enum EnclosureShape {
    Circle = 3,
    Bracket = 4,
    Triangle = 5,
    Diamond = 6,
    None = 7,
    Square = 1,
    Oval = 2,
    Rectangle = 0
}

export enum NormalItalic {
    Italic = 1,
    Normal = 0
}

export enum NormalBold {
    Bold = 2,
    Normal = 0
}

/**
 * Slurs, tuplets, and many other features can be
 * concurrent and overlapping within a single musical
 * part. The number-level attribute distinguishes up to
 * six concurrent objects of the same type. A reading
 * program should be prepared to handle cases where
 * the number-levels stop in an arbitrary order.
 * Different numbers are needed when the features
 * overlap in MusicXML document order. When a number-level
 * value is implied, the value is 1 by default.
 */
export function verifyNumberLevel(m: number) {
    assert(m >= 1 && m <= 6);
}

/**
 * The MusicXML format supports eight levels of beaming, up
 * to 1024th notes. Unlike the number-level attribute, the
 * beam-level attribute identifies concurrent beams in a beam
 * group. It does not distinguish overlapping beams such as
 * grace notes within regular notes, or beams used in different
 * voices.
 */
export function verifyBeamLevel(m: number) {
    assert(m >= 1 && m <= 8);
}

/**
 * The position attributes are based on MuseData print
 * suggestions. For most elements, any program will compute
 * a default x and y position. The position attributes let
 * this be changed two ways.
 * The default-x and default-y attributes change the
 * computation of the default position. For most elements,
 * the origin is changed relative to the left-hand side of
 * the note or the musical position within the bar (x) and
 * the top line of the staff (y).
 * 
 *  
 * For the following elements, the default-x value changes
 * the origin relative to the start of the current measure:
 * 
 *     - note
 *     - figured-bass
 *     - harmony
 *     - link
 *     - directive
 *     - measure-numbering
 *     - all descendants of the part-list element
 *     - all children of the direction-type element
 * 
 * This origin is from the start of the entire measure,
 * at either the left barline or the start of the system.
 * 
 * When the default-x attribute is used within a child element
 * of the part-name-display, part-abbreviation-display,
 * group-name-display, or group-abbreviation-display elements,
 * it changes the origin relative to the start of the first
 * measure on the system. These values are used when the current
 * measure or a succeeding measure starts a new system. The same
 * change of origin is used for the group-symbol element.
 * 
 * For the note, figured-bass, and harmony elements, the
 * default-x value is considered to have adjusted the musical
 * position within the bar for its descendant elements.
 * 
 * Since the credit-words and credit-image elements are not
 * related to a measure, in these cases the default-x and
 * default-y attributes adjust the origin relative to the
 * bottom left-hand corner of the specified page.
 * 
 * The relative-x and relative-y attributes change the position
 * relative to the default position, either as computed by the
 * individual program, or as overridden by the default-x and
 * default-y attributes.
 * 
 * Positive x is right, negative x is left; positive y is up,
 * negative y is down. All units are in tenths of interline
 * space. For stems, positive relative-y lengthens a stem
 * while negative relative-y shortens it.
 * 
 * The default-x and default-y position attributes provide
 * higher-resolution positioning data than related features
 * such as the placement attribute and the offset element.
 * Applications reading a MusicXML file that can understand
 * both features should generally rely on the default-x and
 * default-y attributes for their greater accuracy. For the
 * relative-x and relative-y attributes, the offset element,
 * placement attribute, and directive attribute provide
 * context for the relative position information, so the two
 * features should be interpreted together.
 * 
 * As elsewhere in the MusicXML format, tenths are the global
 * tenths defined by the scaling element, not the local tenths
 * of a staff resized by the staff-size element.
 */
export interface Position {
    defaultX?: number;
    relativeY?: number;
    defaultY?: number;
    relativeX?: number;
}

/**
 * The position attributes are based on MuseData print
 * suggestions. For most elements, any program will compute
 * a default x and y position. The position attributes let
 * this be changed two ways.
 * The default-x and default-y attributes change the
 * computation of the default position. For most elements,
 * the origin is changed relative to the left-hand side of
 * the note or the musical position within the bar (x) and
 * the top line of the staff (y).
 * 
 *  
 * For the following elements, the default-x value changes
 * the origin relative to the start of the current measure:
 * 
 *     - note
 *     - figured-bass
 *     - harmony
 *     - link
 *     - directive
 *     - measure-numbering
 *     - all descendants of the part-list element
 *     - all children of the direction-type element
 * 
 * This origin is from the start of the entire measure,
 * at either the left barline or the start of the system.
 * 
 * When the default-x attribute is used within a child element
 * of the part-name-display, part-abbreviation-display,
 * group-name-display, or group-abbreviation-display elements,
 * it changes the origin relative to the start of the first
 * measure on the system. These values are used when the current
 * measure or a succeeding measure starts a new system. The same
 * change of origin is used for the group-symbol element.
 * 
 * For the note, figured-bass, and harmony elements, the
 * default-x value is considered to have adjusted the musical
 * position within the bar for its descendant elements.
 * 
 * Since the credit-words and credit-image elements are not
 * related to a measure, in these cases the default-x and
 * default-y attributes adjust the origin relative to the
 * bottom left-hand corner of the specified page.
 * 
 * The relative-x and relative-y attributes change the position
 * relative to the default position, either as computed by the
 * individual program, or as overridden by the default-x and
 * default-y attributes.
 * 
 * Positive x is right, negative x is left; positive y is up,
 * negative y is down. All units are in tenths of interline
 * space. For stems, positive relative-y lengthens a stem
 * while negative relative-y shortens it.
 * 
 * The default-x and default-y position attributes provide
 * higher-resolution positioning data than related features
 * such as the placement attribute and the offset element.
 * Applications reading a MusicXML file that can understand
 * both features should generally rely on the default-x and
 * default-y attributes for their greater accuracy. For the
 * relative-x and relative-y attributes, the offset element,
 * placement attribute, and directive attribute provide
 * context for the relative position information, so the two
 * features should be interpreted together.
 * 
 * As elsewhere in the MusicXML format, tenths are the global
 * tenths defined by the scaling element, not the local tenths
 * of a staff resized by the staff-size element.
 */
export interface PositionComplete {
    defaultX: number;
    relativeY: number;
    defaultY: number;
    relativeX: number;
}


/**
 * The placement attribute indicates whether something is
 * above or below another element, such as a note or a
 * notation.
 */
export interface Placement {
    placement?: AboveBelow;
}

/**
 * The placement attribute indicates whether something is
 * above or below another element, such as a note or a
 * notation.
 */
export interface PlacementComplete {
    placement: AboveBelow;
}


/**
 * The orientation attribute indicates whether slurs and
 * ties are overhand (tips down) or underhand (tips up).
 * This is distinct from the placement entity used by any
 * notation type.
 */
export interface Orientation {
    orientation?: OverUnder;
}

/**
 * The orientation attribute indicates whether slurs and
 * ties are overhand (tips down) or underhand (tips up).
 * This is distinct from the placement entity used by any
 * notation type.
 */
export interface OrientationComplete {
    orientation: OverUnder;
}


/**
 * The directive entity changes the default-x position
 * of a direction. It indicates that the left-hand side of the
 * direction is aligned with the left-hand side of the time
 * signature. If no time signature is present, it is aligned
 * with the left-hand side of the first music notational
 * element in the measure. If a default-x, justify, or halign
 * attribute is present, it overrides the directive entity.
 */
export interface DirectiveEntity {
    directiveEntity?: boolean;
}

/**
 * The directive entity changes the default-x position
 * of a direction. It indicates that the left-hand side of the
 * direction is aligned with the left-hand side of the time
 * signature. If no time signature is present, it is aligned
 * with the left-hand side of the first music notational
 * element in the measure. If a default-x, justify, or halign
 * attribute is present, it overrides the directive entity.
 */
export interface DirectiveEntityComplete {
    directiveEntity: boolean;
}


/**
 * The bezier entity is used to indicate the curvature of
 * slurs and ties, representing the control points for a
 * cubic bezier curve. For ties, the bezier entity is
 * used with the tied element.
 * Normal slurs, S-shaped slurs, and ties need only two
 * bezier points: one associated with the start of the slur
 * or tie, the other with the stop. Complex slurs and slurs
 * divided over system breaks can specify additional
 * bezier data at slur elements with a continue type.
 * 
 * The bezier-offset, bezier-x, and bezier-y attributes
 * describe the outgoing bezier point for slurs and ties
 * with a start type, and the incoming bezier point for
 * slurs and ties with types of stop or continue. The
 * attributes bezier-offset2, bezier-x2, and bezier-y2
 * are only valid with slurs of type continue, and
 * describe the outgoing bezier point.
 * 
 * The bezier-offset and bezier-offset2 attributes are
 * measured in terms of musical divisions, like the offset
 * element. These are the recommended attributes for
 * specifying horizontal position. The other attributes
 * are specified in tenths, relative to any position
 * settings associated with the slur or tied element.
 */
export interface Bezier {
    bezierX2?: number;
    bezierOffset?: number;
    bezierOffset2?: number;
    bezierX?: number;
    bezierY?: number;
    bezierY2?: number;
}

/**
 * The bezier entity is used to indicate the curvature of
 * slurs and ties, representing the control points for a
 * cubic bezier curve. For ties, the bezier entity is
 * used with the tied element.
 * Normal slurs, S-shaped slurs, and ties need only two
 * bezier points: one associated with the start of the slur
 * or tie, the other with the stop. Complex slurs and slurs
 * divided over system breaks can specify additional
 * bezier data at slur elements with a continue type.
 * 
 * The bezier-offset, bezier-x, and bezier-y attributes
 * describe the outgoing bezier point for slurs and ties
 * with a start type, and the incoming bezier point for
 * slurs and ties with types of stop or continue. The
 * attributes bezier-offset2, bezier-x2, and bezier-y2
 * are only valid with slurs of type continue, and
 * describe the outgoing bezier point.
 * 
 * The bezier-offset and bezier-offset2 attributes are
 * measured in terms of musical divisions, like the offset
 * element. These are the recommended attributes for
 * specifying horizontal position. The other attributes
 * are specified in tenths, relative to any position
 * settings associated with the slur or tied element.
 */
export interface BezierComplete {
    bezierX2: number;
    bezierOffset: number;
    bezierOffset2: number;
    bezierX: number;
    bezierY: number;
    bezierY2: number;
}


/**
 * The font entity gathers together attributes for
 * determining the font within a directive or direction.
 * They are based on the text styles for Cascading
 * Style Sheets. The font-family is a comma-separated list
 * of font names. These can be specific font styles such
 * as Maestro or Opus, or one of several generic font styles:
 * music, engraved, handwritten, text, serif, sans-serif,
 * handwritten, cursive, fantasy, and monospace. The music,
 * engraved, and handwritten values refer to music fonts;
 * the rest refer to text fonts. The fantasy style refers to
 * decorative text such as found in older German-style
 * printing. The font-style can be normal or italic. The
 * font-size can be one of the CSS sizes (xx-small, x-small,
 * small, medium, large, x-large, xx-large) or a numeric
 * point size. The font-weight can be normal or bold. The
 * default is application-dependent, but is a text font vs.
 * a music font.
 */
export interface Font {
    fontFamily?: string;
    fontWeight?: NormalBold;
    fontStyle?: NormalItalic;
    fontSize?: string;
}

/**
 * The font entity gathers together attributes for
 * determining the font within a directive or direction.
 * They are based on the text styles for Cascading
 * Style Sheets. The font-family is a comma-separated list
 * of font names. These can be specific font styles such
 * as Maestro or Opus, or one of several generic font styles:
 * music, engraved, handwritten, text, serif, sans-serif,
 * handwritten, cursive, fantasy, and monospace. The music,
 * engraved, and handwritten values refer to music fonts;
 * the rest refer to text fonts. The fantasy style refers to
 * decorative text such as found in older German-style
 * printing. The font-style can be normal or italic. The
 * font-size can be one of the CSS sizes (xx-small, x-small,
 * small, medium, large, x-large, xx-large) or a numeric
 * point size. The font-weight can be normal or bold. The
 * default is application-dependent, but is a text font vs.
 * a music font.
 */
export interface FontComplete {
    fontFamily: string;
    fontWeight: NormalBold;
    fontStyle: NormalItalic;
    fontSize: string;
}


export enum LeftCenterRight {
    Right = 1,
    Center = 2,
    Left = 0
}

export enum TopMiddleBottomBaseline {
    Top = 0,
    Middle = 1,
    Baseline = 3,
    Bottom = 2
}

export enum DirectionMode {
    Lro = 2,
    Rlo = 3,
    Ltr = 0,
    Rtl = 1
}

export enum StraightCurved {
    Curved = 1,
    Straight = 0
}

export enum SolidDashedDottedWavy {
    Dashed = 1,
    Wavy = 3,
    Dotted = 2,
    Solid = 0
}

export enum NormalAngledSquare {
    Angled = 1,
    Square = 2,
    Normal = 0
}

export enum UprightInverted {
    Upright = 0,
    Inverted = 1
}

export enum UpperMainBelow {
    Main = 1,
    Below = 2,
    Upper = 0
}

export enum WholeHalfUnison {
    Unison = 2,
    Whole = 0,
    Half = 1
}

export enum WholeHalfNone {
    None = 3,
    Whole = 0,
    Half = 1
}

/**
 * The color entity indicates the color of an element.
 * Color may be represented as hexadecimal RGB triples,
 * as in HTML, or as hexadecimal ARGB tuples, with the
 * A indicating alpha of transparency. An alpha value
 * of 00 is totally transparent; FF is totally opaque.
 * If RGB is used, the A value is assumed to be FF.
 * For instance, the RGB value "#800080" represents
 * purple. An ARGB value of "#40800080" would be a
 * transparent purple.
 *  
 *  
 * As in SVG 1.1, colors are defined in terms of the 
 * sRGB color space (IEC 61966).
 */
export interface Color {
    color?: string;
}

/**
 * The color entity indicates the color of an element.
 * Color may be represented as hexadecimal RGB triples,
 * as in HTML, or as hexadecimal ARGB tuples, with the
 * A indicating alpha of transparency. An alpha value
 * of 00 is totally transparent; FF is totally opaque.
 * If RGB is used, the A value is assumed to be FF.
 * For instance, the RGB value "#800080" represents
 * purple. An ARGB value of "#40800080" would be a
 * transparent purple.
 *  
 *  
 * As in SVG 1.1, colors are defined in terms of the 
 * sRGB color space (IEC 61966).
 */
export interface ColorComplete {
    color: string;
}


/**
 * The text-decoration entity is based on the similar
 * feature in XHTML and CSS. It allows for text to
 * be underlined, overlined, or struck-through. It
 * extends the CSS version by allow double or
 * triple lines instead of just being on or off.
 */
export interface TextDecoration {
    underline?: number;
    overline?: number;
    lineThrough?: number;
}

/**
 * The text-decoration entity is based on the similar
 * feature in XHTML and CSS. It allows for text to
 * be underlined, overlined, or struck-through. It
 * extends the CSS version by allow double or
 * triple lines instead of just being on or off.
 */
export interface TextDecorationComplete {
    underline: number;
    overline: number;
    lineThrough: number;
}


/**
 * The justify entity is used to indicate left, center, or
 * right justification. The default value varies for different
 * elements. For elements where the justify attribute is present
 * but the halign attribute is not, the justify attribute
 * indicates horizontal alignment as well as justification.
 */
export interface Justify {
    justify?: LeftCenterRight;
}

/**
 * The justify entity is used to indicate left, center, or
 * right justification. The default value varies for different
 * elements. For elements where the justify attribute is present
 * but the halign attribute is not, the justify attribute
 * indicates horizontal alignment as well as justification.
 */
export interface JustifyComplete {
    justify: LeftCenterRight;
}


/**
 * In cases where text extends over more than one line,
 * horizontal alignment and justify values can be different.
 * The most typical case is for credits, such as:
 * Words and music by
 *   Pat Songwriter
 *  
 *  
 * Typically this type of credit is aligned to the right, 
 * so that the position information refers to the right- 
 * most part of the text. But in this example, the text 
 * is center-justified, not right-justified.  
 *  
 * The halign attribute is used in these situations. If it 
 * is not present, its value is the same as for the justify 
 * attribute.
 */
export interface Halign {
    halign?: LeftCenterRight;
}

/**
 * In cases where text extends over more than one line,
 * horizontal alignment and justify values can be different.
 * The most typical case is for credits, such as:
 * Words and music by
 *   Pat Songwriter
 *  
 *  
 * Typically this type of credit is aligned to the right, 
 * so that the position information refers to the right- 
 * most part of the text. But in this example, the text 
 * is center-justified, not right-justified.  
 *  
 * The halign attribute is used in these situations. If it 
 * is not present, its value is the same as for the justify 
 * attribute.
 */
export interface HalignComplete {
    halign: LeftCenterRight;
}


/**
 * The valign entity is used to indicate vertical
 * alignment to the top, middle, bottom, or baseline
 * of the text. Defaults are implementation-dependent.
 */
export interface Valign {
    valign?: TopMiddleBottomBaseline;
}

/**
 * The valign entity is used to indicate vertical
 * alignment to the top, middle, bottom, or baseline
 * of the text. Defaults are implementation-dependent.
 */
export interface ValignComplete {
    valign: TopMiddleBottomBaseline;
}


/**
 * The valign-image entity is used to indicate vertical
 * alignment for images and graphics, so it removes the
 * baseline value. Defaults are implementation-dependent.
 */
export interface ValignImage {
    valignImage?: TopMiddleBottomBaseline;
}

/**
 * The valign-image entity is used to indicate vertical
 * alignment for images and graphics, so it removes the
 * baseline value. Defaults are implementation-dependent.
 */
export interface ValignImageComplete {
    valignImage: TopMiddleBottomBaseline;
}


/**
 * The letter-spacing entity specifies text tracking.
 * Values are either "normal" or a number representing
 * the number of ems to add between each letter. The
 * number may be negative in order to subtract space.
 * The default is normal, which allows flexibility of
 * letter-spacing for purposes of text justification.
 */
export interface LetterSpacing {
    letterSpacing?: string;
}

/**
 * The letter-spacing entity specifies text tracking.
 * Values are either "normal" or a number representing
 * the number of ems to add between each letter. The
 * number may be negative in order to subtract space.
 * The default is normal, which allows flexibility of
 * letter-spacing for purposes of text justification.
 */
export interface LetterSpacingComplete {
    letterSpacing: string;
}


/**
 * The line-height entity specified text leading. Values
 * are either "normal" or a number representing the
 * percentage of the current font height  to use for
 * leading. The default is "normal". The exact normal
 * value is implementation-dependent, but values
 * between 100 and 120 are recommended.
 */
export interface LineHeight {
    lineHeight?: string;
}

/**
 * The line-height entity specified text leading. Values
 * are either "normal" or a number representing the
 * percentage of the current font height  to use for
 * leading. The default is "normal". The exact normal
 * value is implementation-dependent, but values
 * between 100 and 120 are recommended.
 */
export interface LineHeightComplete {
    lineHeight: string;
}


/**
 * The text-direction entity is used to adjust and override
 * the Unicode bidirectional text algorithm, similar to the
 * W3C Internationalization Tag Set recommendation. Values
 * are ltr (left-to-right embed), rtl (right-to-left embed),
 * lro (left-to-right bidi-override), and rlo (right-to-left
 * bidi-override). The default value is ltr. This entity
 * is typically used by applications that store text in
 * left-to-right visual order rather than logical order.
 * Such applications can use the lro value to better
 * communicate with other applications that more fully
 * support bidirectional text.
 */
export interface TextDirection {
    dir?: DirectionMode;
}

/**
 * The text-direction entity is used to adjust and override
 * the Unicode bidirectional text algorithm, similar to the
 * W3C Internationalization Tag Set recommendation. Values
 * are ltr (left-to-right embed), rtl (right-to-left embed),
 * lro (left-to-right bidi-override), and rlo (right-to-left
 * bidi-override). The default value is ltr. This entity
 * is typically used by applications that store text in
 * left-to-right visual order rather than logical order.
 * Such applications can use the lro value to better
 * communicate with other applications that more fully
 * support bidirectional text.
 */
export interface TextDirectionComplete {
    dir: DirectionMode;
}


/**
 * The text-rotation entity is used to rotate text
 * around the alignment point specified by the
 * halign and valign entities. The value is a number
 * ranging from -180 to 180. Positive values are
 * clockwise rotations, while negative values are
 * counter-clockwise rotations.
 */
export interface TextRotation {
    rotation?: number;
}

/**
 * The text-rotation entity is used to rotate text
 * around the alignment point specified by the
 * halign and valign entities. The value is a number
 * ranging from -180 to 180. Positive values are
 * clockwise rotations, while negative values are
 * counter-clockwise rotations.
 */
export interface TextRotationComplete {
    rotation: number;
}


/**
 * The enclosure entity is used to specify the
 * formatting of an enclosure around text or symbols.
 */
export interface Enclosure {
    enclosure?: EnclosureShape;
}

/**
 * The enclosure entity is used to specify the
 * formatting of an enclosure around text or symbols.
 */
export interface EnclosureComplete {
    enclosure: EnclosureShape;
}


/**
 * The print-style entity groups together the most popular
 * combination of printing attributes: position, font, and
 * color.
 */
export interface PrintStyle extends Position, Font, Color {
}

/**
 * The print-style entity groups together the most popular
 * combination of printing attributes: position, font, and
 * color.
 */
export interface PrintStyleComplete extends PositionComplete, FontComplete, ColorComplete {
}


/**
 * The print-style-align entity adds the halign and valign
 * attributes to the position, font, and color attributes.
 */
export interface PrintStyleAlign extends PrintStyle, Halign, Valign {
}

/**
 * The print-style-align entity adds the halign and valign
 * attributes to the position, font, and color attributes.
 */
export interface PrintStyleAlignComplete extends PrintStyleComplete, HalignComplete, ValignComplete {
}


/**
 * The line-shape entity is used to distinguish between
 * straight and curved lines. The line-type entity
 * distinguishes between solid, dashed, dotted, and
 * wavy lines.
 */
export interface LineShape {
    lineShape?: StraightCurved;
}

/**
 * The line-shape entity is used to distinguish between
 * straight and curved lines. The line-type entity
 * distinguishes between solid, dashed, dotted, and
 * wavy lines.
 */
export interface LineShapeComplete {
    lineShape: StraightCurved;
}


/**
 * The line-shape entity is used to distinguish between
 * straight and curved lines. The line-type entity
 * distinguishes between solid, dashed, dotted, and
 * wavy lines.
 */
export interface LineType {
    lineType?: SolidDashedDottedWavy;
}

/**
 * The line-shape entity is used to distinguish between
 * straight and curved lines. The line-type entity
 * distinguishes between solid, dashed, dotted, and
 * wavy lines.
 */
export interface LineTypeComplete {
    lineType: SolidDashedDottedWavy;
}


/**
 * The dashed-formatting entity represents the length of
 * dashes and spaces in a dashed line. Both the dash-length
 * and space-length attributes are represented in tenths.
 * These attributes are ignored if the corresponding
 * line-type attribute is not dashed.
 */
export interface DashedFormatting {
    dashLength?: number;
    spaceLength?: number;
}

/**
 * The dashed-formatting entity represents the length of
 * dashes and spaces in a dashed line. Both the dash-length
 * and space-length attributes are represented in tenths.
 * These attributes are ignored if the corresponding
 * line-type attribute is not dashed.
 */
export interface DashedFormattingComplete {
    dashLength: number;
    spaceLength: number;
}


/**
 * The printout entity is based on MuseData print
 * suggestions. They allow a way to specify not to print
 * print an object (e.g. note or rest), its augmentation
 * dots, or its lyrics. This is especially useful for notes
 * that overlap in different voices, or for chord sheets
 * that contain lyrics and chords but no melody. For wholly
 * invisible notes, such as those providing sound-only data,
 * the attribute for print-spacing may be set to no so that
 * no space is left for this note. The print-spacing value
 * is only used if no note, dot, or lyric is being printed.
 * By default, all these attributes are set to yes. If
 * print-object is set to no, print-dot and print-lyric are
 * interpreted to also be set to no if they are not present.
 */
export interface PrintObject {
    printObject?: boolean;
}

/**
 * The printout entity is based on MuseData print
 * suggestions. They allow a way to specify not to print
 * print an object (e.g. note or rest), its augmentation
 * dots, or its lyrics. This is especially useful for notes
 * that overlap in different voices, or for chord sheets
 * that contain lyrics and chords but no melody. For wholly
 * invisible notes, such as those providing sound-only data,
 * the attribute for print-spacing may be set to no so that
 * no space is left for this note. The print-spacing value
 * is only used if no note, dot, or lyric is being printed.
 * By default, all these attributes are set to yes. If
 * print-object is set to no, print-dot and print-lyric are
 * interpreted to also be set to no if they are not present.
 */
export interface PrintObjectComplete {
    printObject: boolean;
}


/**
 * The printout entity is based on MuseData print
 * suggestions. They allow a way to specify not to print
 * print an object (e.g. note or rest), its augmentation
 * dots, or its lyrics. This is especially useful for notes
 * that overlap in different voices, or for chord sheets
 * that contain lyrics and chords but no melody. For wholly
 * invisible notes, such as those providing sound-only data,
 * the attribute for print-spacing may be set to no so that
 * no space is left for this note. The print-spacing value
 * is only used if no note, dot, or lyric is being printed.
 * By default, all these attributes are set to yes. If
 * print-object is set to no, print-dot and print-lyric are
 * interpreted to also be set to no if they are not present.
 */
export interface PrintSpacing {
    printSpacing?: boolean;
}

/**
 * The printout entity is based on MuseData print
 * suggestions. They allow a way to specify not to print
 * print an object (e.g. note or rest), its augmentation
 * dots, or its lyrics. This is especially useful for notes
 * that overlap in different voices, or for chord sheets
 * that contain lyrics and chords but no melody. For wholly
 * invisible notes, such as those providing sound-only data,
 * the attribute for print-spacing may be set to no so that
 * no space is left for this note. The print-spacing value
 * is only used if no note, dot, or lyric is being printed.
 * By default, all these attributes are set to yes. If
 * print-object is set to no, print-dot and print-lyric are
 * interpreted to also be set to no if they are not present.
 */
export interface PrintSpacingComplete {
    printSpacing: boolean;
}


/**
 * The printout entity is based on MuseData print
 * suggestions. They allow a way to specify not to print
 * print an object (e.g. note or rest), its augmentation
 * dots, or its lyrics. This is especially useful for notes
 * that overlap in different voices, or for chord sheets
 * that contain lyrics and chords but no melody. For wholly
 * invisible notes, such as those providing sound-only data,
 * the attribute for print-spacing may be set to no so that
 * no space is left for this note. The print-spacing value
 * is only used if no note, dot, or lyric is being printed.
 * By default, all these attributes are set to yes. If
 * print-object is set to no, print-dot and print-lyric are
 * interpreted to also be set to no if they are not present.
 */
export interface Printout extends PrintObject, PrintSpacing {
    printDot?: boolean;
    printLyric?: boolean;
}

/**
 * The printout entity is based on MuseData print
 * suggestions. They allow a way to specify not to print
 * print an object (e.g. note or rest), its augmentation
 * dots, or its lyrics. This is especially useful for notes
 * that overlap in different voices, or for chord sheets
 * that contain lyrics and chords but no melody. For wholly
 * invisible notes, such as those providing sound-only data,
 * the attribute for print-spacing may be set to no so that
 * no space is left for this note. The print-spacing value
 * is only used if no note, dot, or lyric is being printed.
 * By default, all these attributes are set to yes. If
 * print-object is set to no, print-dot and print-lyric are
 * interpreted to also be set to no if they are not present.
 */
export interface PrintoutComplete extends PrintObjectComplete, PrintSpacingComplete {
    printDot: boolean;
    printLyric: boolean;
}


/**
 * The text-formatting entity contains the common formatting
 * attributes for text elements. Default values may differ
 * across the elements that use this entity.
 */
export interface TextFormatting extends Justify, PrintStyleAlign, TextDecoration, TextRotation, LetterSpacing, LineHeight, TextDirection, Enclosure {
}

/**
 * The text-formatting entity contains the common formatting
 * attributes for text elements. Default values may differ
 * across the elements that use this entity.
 */
export interface TextFormattingComplete extends JustifyComplete, PrintStyleAlignComplete, TextDecorationComplete, TextRotationComplete, LetterSpacingComplete, LineHeightComplete, TextDirectionComplete, EnclosureComplete {
}


/**
 * The level-display entity allows specification of three
 * common ways to indicate editorial indications: putting
 * parentheses or square brackets around a symbol, or making
 * the symbol a different size. If not specified, they are
 * left to application defaults. It is used by the level and
 * accidental elements.
 */
export interface LevelDisplay {
    bracket?: boolean;
    size?: SymbolSize;
    parentheses?: boolean;
}

/**
 * The level-display entity allows specification of three
 * common ways to indicate editorial indications: putting
 * parentheses or square brackets around a symbol, or making
 * the symbol a different size. If not specified, they are
 * left to application defaults. It is used by the level and
 * accidental elements.
 */
export interface LevelDisplayComplete {
    bracket: boolean;
    size: SymbolSize;
    parentheses: boolean;
}


/**
 * The trill-sound entity includes attributes used to guide
 * the sound of trills, mordents, turns, shakes, and wavy
 * lines, based on MuseData sound suggestions. The default
 * choices are:
 * 
 * start-note = "upper"
 * 
 * trill-step = "whole"        two-note-turn = "none"
 * 
 * accelerate = "no"        beats = "4" (minimum of "2").
 * 
 * Second-beat and last-beat are percentages for landing on
 * the indicated beat, with defaults of 25 and 75 respectively.
 * 
 * For mordent and inverted-mordent elements, the defaults
 * are different:
 * 
 * The default start-note is "main", not "upper".
 * The default for beats is "3", not "4".
 * The default for second-beat is "12", not "25".
 * The default for last-beat is "24", not "75".
 */
export interface TrillSound {
    startNote?: UpperMainBelow;
    accelerate?: boolean;
    beats?: number;
    lastBeat?: number;
    trillStep?: WholeHalfUnison;
    twoNoteTurn?: WholeHalfNone;
    secondBeat?: number;
}

/**
 * The trill-sound entity includes attributes used to guide
 * the sound of trills, mordents, turns, shakes, and wavy
 * lines, based on MuseData sound suggestions. The default
 * choices are:
 * 
 * start-note = "upper"
 * 
 * trill-step = "whole"        two-note-turn = "none"
 * 
 * accelerate = "no"        beats = "4" (minimum of "2").
 * 
 * Second-beat and last-beat are percentages for landing on
 * the indicated beat, with defaults of 25 and 75 respectively.
 * 
 * For mordent and inverted-mordent elements, the defaults
 * are different:
 * 
 * The default start-note is "main", not "upper".
 * The default for beats is "3", not "4".
 * The default for second-beat is "12", not "25".
 * The default for last-beat is "24", not "75".
 */
export interface TrillSoundComplete {
    startNote: UpperMainBelow;
    accelerate: boolean;
    beats: number;
    lastBeat: number;
    trillStep: WholeHalfUnison;
    twoNoteTurn: WholeHalfNone;
    secondBeat: number;
}


/**
 * The bend-sound entity is used for bend and slide elements,
 * and is similar to the trill-sound. Here the beats element
 * refers to the number of discrete elements (like MIDI pitch
 * bends) used to represent a continuous bend or slide. The
 * first-beat indicates the percentage of the direction for
 * starting a bend; the last-beat the percentage for ending it.
 * The default choices are:
 * 
 * accelerate = "no"
 * 
 * beats = "4" (minimum of "2")
 * first-beat = "25"
 * 
 * last-beat = "75"
 */
export interface BendSound {
    accelerate?: boolean;
    beats?: number;
    lastBeat?: number;
    secondBeat?: number;
}

/**
 * The bend-sound entity is used for bend and slide elements,
 * and is similar to the trill-sound. Here the beats element
 * refers to the number of discrete elements (like MIDI pitch
 * bends) used to represent a continuous bend or slide. The
 * first-beat indicates the percentage of the direction for
 * starting a bend; the last-beat the percentage for ending it.
 * The default choices are:
 * 
 * accelerate = "no"
 * 
 * beats = "4" (minimum of "2")
 * first-beat = "25"
 * 
 * last-beat = "75"
 */
export interface BendSoundComplete {
    accelerate: boolean;
    beats: number;
    lastBeat: number;
    secondBeat: number;
}


/**
 * The time-only entity is used to indicate that a particular
 * playback-related element only applies particular times through
 * a repeated section.
 */
export interface TimeOnly {
    timeOnly: string;
}

/**
 * The time-only entity is used to indicate that a particular
 * playback-related element only applies particular times through
 * a repeated section.
 */
export interface TimeOnlyComplete {
    timeOnly: string;
}


/**
 * The document-attributes entity is used to specify the
 * attributes for an entire MusicXML document. Currently
 * this is used for the version attribute.
 */
export interface DocumentAttributes {
    version_: string;
}

/**
 * The document-attributes entity is used to specify the
 * attributes for an entire MusicXML document. Currently
 * this is used for the version attribute.
 */
export interface DocumentAttributesComplete {
    version_: string;
}


/**
 * Two entities for editorial information in notes. These
 * entities, and their elements defined below, are used
 * across all the different component DTD modules.
 */
export interface Editorial {
    footnote?: Footnote;
    level?: Level;
}

/**
 * Two entities for editorial information in notes. These
 * entities, and their elements defined below, are used
 * across all the different component DTD modules.
 */
export interface EditorialComplete {
    footnote: Footnote;
    level: Level;
}


/**
 * Two entities for editorial information in notes. These
 * entities, and their elements defined below, are used
 * across all the different component DTD modules.
 */
export interface EditorialVoice {
    voice?: string;
    footnote?: Footnote;
    level?: Level;
}

/**
 * Two entities for editorial information in notes. These
 * entities, and their elements defined below, are used
 * across all the different component DTD modules.
 */
export interface EditorialVoiceComplete {
    voice: string;
    footnote: Footnote;
    level: Level;
}


/**
 * Footnote and level are used to specify editorial
 * information, while voice is used to distinguish between
 * multiple voices (what MuseData calls tracks) in individual
 * parts. These elements are used throughout the different
 * MusicXML DTD modules. If the reference attribute for the
 * level element is yes, this indicates editorial information
 * that is for display only and should not affect playback.
 * For instance, a modern edition of older music may set
 * reference="yes" on the attributes containing the music's
 * original clef, key, and time signature. It is no by default.
 */
export interface Footnote extends TextFormatting {
    text: string;
}

/**
 * Footnote and level are used to specify editorial
 * information, while voice is used to distinguish between
 * multiple voices (what MuseData calls tracks) in individual
 * parts. These elements are used throughout the different
 * MusicXML DTD modules. If the reference attribute for the
 * level element is yes, this indicates editorial information
 * that is for display only and should not affect playback.
 * For instance, a modern edition of older music may set
 * reference="yes" on the attributes containing the music's
 * original clef, key, and time signature. It is no by default.
 */
export interface FootnoteComplete extends TextFormattingComplete {
    text: string;
}


/**
 * Footnote and level are used to specify editorial
 * information, while voice is used to distinguish between
 * multiple voices (what MuseData calls tracks) in individual
 * parts. These elements are used throughout the different
 * MusicXML DTD modules. If the reference attribute for the
 * level element is yes, this indicates editorial information
 * that is for display only and should not affect playback.
 * For instance, a modern edition of older music may set
 * reference="yes" on the attributes containing the music's
 * original clef, key, and time signature. It is no by default.
 */
export interface Level extends LevelDisplay {
    text: string;
    reference?: boolean;
}

/**
 * Footnote and level are used to specify editorial
 * information, while voice is used to distinguish between
 * multiple voices (what MuseData calls tracks) in individual
 * parts. These elements are used throughout the different
 * MusicXML DTD modules. If the reference attribute for the
 * level element is yes, this indicates editorial information
 * that is for display only and should not affect playback.
 * For instance, a modern edition of older music may set
 * reference="yes" on the attributes containing the music's
 * original clef, key, and time signature. It is no by default.
 */
export interface LevelComplete extends LevelDisplayComplete {
    text: string;
    reference: boolean;
}


/**
 * Fermata and wavy-line elements can be applied both to
 * notes and to measures, so they are defined here. Wavy
 * lines are one way to indicate trills; when used with a
 * measure element, they should always have type="continue"
 * 
 * set. The fermata text content represents the shape of the
 * fermata sign and may be normal, angled, or square.
 * An empty fermata element represents a normal fermata.
 * The fermata type is upright if not specified.
 */
export interface Fermata extends PrintStyle {
    shape: NormalAngledSquare;
    type?: UprightInverted;
}

/**
 * Fermata and wavy-line elements can be applied both to
 * notes and to measures, so they are defined here. Wavy
 * lines are one way to indicate trills; when used with a
 * measure element, they should always have type="continue"
 * 
 * set. The fermata text content represents the shape of the
 * fermata sign and may be normal, angled, or square.
 * An empty fermata element represents a normal fermata.
 * The fermata type is upright if not specified.
 */
export interface FermataComplete extends PrintStyleComplete {
    shape: NormalAngledSquare;
    type: UprightInverted;
}


/**
 * Fermata and wavy-line elements can be applied both to
 * notes and to measures, so they are defined here. Wavy
 * lines are one way to indicate trills; when used with a
 * measure element, they should always have type="continue"
 * 
 * set. The fermata text content represents the shape of the
 * fermata sign and may be normal, angled, or square.
 * An empty fermata element represents a normal fermata.
 * The fermata type is upright if not specified.
 */
export interface WavyLine extends Position, Placement, Color, TrillSound {
    number_?: number;
    type: StartStopContinue;
}

/**
 * Fermata and wavy-line elements can be applied both to
 * notes and to measures, so they are defined here. Wavy
 * lines are one way to indicate trills; when used with a
 * measure element, they should always have type="continue"
 * 
 * set. The fermata text content represents the shape of the
 * fermata sign and may be normal, angled, or square.
 * An empty fermata element represents a normal fermata.
 * The fermata type is upright if not specified.
 */
export interface WavyLineComplete extends PositionComplete, PlacementComplete, ColorComplete, TrillSoundComplete {
    number_: number;
    type: StartStopContinue;
}


/**
 * Staff assignment is only needed for music notated on
 * multiple staves. Used by both notes and directions.
 */
export interface Staff {
    idx: number;
}

/**
 * Staff assignment is only needed for music notated on
 * multiple staves. Used by both notes and directions.
 */
export interface StaffComplete {
    idx: number;
}


/**
 * Segno and coda signs can be associated with a measure
 * or a general musical direction. These are visual
 * indicators only; a sound element is needed to guide
 * playback applications reliably.
 */
export interface Segno extends PrintStyleAlign {
}

/**
 * Segno and coda signs can be associated with a measure
 * or a general musical direction. These are visual
 * indicators only; a sound element is needed to guide
 * playback applications reliably.
 */
export interface SegnoComplete extends PrintStyleAlignComplete {
}


/**
 * Segno and coda signs can be associated with a measure
 * or a general musical direction. These are visual
 * indicators only; a sound element is needed to guide
 * playback applications reliably.
 */
export interface Coda extends PrintStyleAlign {
}

/**
 * Segno and coda signs can be associated with a measure
 * or a general musical direction. These are visual
 * indicators only; a sound element is needed to guide
 * playback applications reliably.
 */
export interface CodaComplete extends PrintStyleAlignComplete {
}


/**
 * These elements are used both in the time-modification and
 * metronome-tuplet elements. The actual-notes element
 * describes how many notes are played in the time usually
 * occupied by the number of normal-notes. If the normal-notes
 * type is different than the current note type (e.g., a
 * quarter note within an eighth note triplet), then the
 * normal-notes type (e.g. eighth) is specified in the
 * normal-type and normal-dot elements. The content of the
 * actual-notes and normal-notes elements ia a non-negative
 * integer.
 */
export interface ActualNotes {
    count: number;
}

/**
 * These elements are used both in the time-modification and
 * metronome-tuplet elements. The actual-notes element
 * describes how many notes are played in the time usually
 * occupied by the number of normal-notes. If the normal-notes
 * type is different than the current note type (e.g., a
 * quarter note within an eighth note triplet), then the
 * normal-notes type (e.g. eighth) is specified in the
 * normal-type and normal-dot elements. The content of the
 * actual-notes and normal-notes elements ia a non-negative
 * integer.
 */
export interface ActualNotesComplete {
    count: number;
}


/**
 * These elements are used both in the time-modification and
 * metronome-tuplet elements. The actual-notes element
 * describes how many notes are played in the time usually
 * occupied by the number of normal-notes. If the normal-notes
 * type is different than the current note type (e.g., a
 * quarter note within an eighth note triplet), then the
 * normal-notes type (e.g. eighth) is specified in the
 * normal-type and normal-dot elements. The content of the
 * actual-notes and normal-notes elements ia a non-negative
 * integer.
 */
export interface NormalNotes {
    count: number;
}

/**
 * These elements are used both in the time-modification and
 * metronome-tuplet elements. The actual-notes element
 * describes how many notes are played in the time usually
 * occupied by the number of normal-notes. If the normal-notes
 * type is different than the current note type (e.g., a
 * quarter note within an eighth note triplet), then the
 * normal-notes type (e.g. eighth) is specified in the
 * normal-type and normal-dot elements. The content of the
 * actual-notes and normal-notes elements ia a non-negative
 * integer.
 */
export interface NormalNotesComplete {
    count: number;
}


/**
 * These elements are used both in the time-modification and
 * metronome-tuplet elements. The actual-notes element
 * describes how many notes are played in the time usually
 * occupied by the number of normal-notes. If the normal-notes
 * type is different than the current note type (e.g., a
 * quarter note within an eighth note triplet), then the
 * normal-notes type (e.g. eighth) is specified in the
 * normal-type and normal-dot elements. The content of the
 * actual-notes and normal-notes elements ia a non-negative
 * integer.
 */
export interface NormalDot {
}

/**
 * These elements are used both in the time-modification and
 * metronome-tuplet elements. The actual-notes element
 * describes how many notes are played in the time usually
 * occupied by the number of normal-notes. If the normal-notes
 * type is different than the current note type (e.g., a
 * quarter note within an eighth note triplet), then the
 * normal-notes type (e.g. eighth) is specified in the
 * normal-type and normal-dot elements. The content of the
 * actual-notes and normal-notes elements ia a non-negative
 * integer.
 */
export interface NormalDotComplete {
}


/**
 * Dynamics can be associated either with a note or a general
 * musical direction. To avoid inconsistencies between and
 * amongst the letter abbreviations for dynamics (what is sf
 * vs. sfz, standing alone or with a trailing dynamic that is
 * not always piano), we use the actual letters as the names
 * of these dynamic elements. The other-dynamics element
 * allows other dynamic marks that are not covered here, but
 * many of those should perhaps be included in a more general
 * musical direction element. Dynamics may also be combined as
 * in <sf/><mp/>.
 * 
 * These letter dynamic symbols are separated from crescendo,
 * decrescendo, and wedge indications. Dynamic representation
 * is inconsistent in scores. Many things are assumed by the
 * composer and left out, such as returns to original dynamics.
 * Systematic representations are quite complex: for example,
 * Humdrum has at least 3 representation formats related to
 * dynamics. The MusicXML format captures what is in the score,
 * but does not try to be optimal for analysis or synthesis of
 * dynamics.
 */
export interface Dynamics extends PrintStyleAlign, Placement, TextDecoration, Enclosure {
    fp: boolean;
    pp: boolean;
    ppp: boolean;
    fff: boolean;
    sf: boolean;
    rf: boolean;
    mp: boolean;
    sfpp: boolean;
    f: boolean;
    ffffff: boolean;
    sfz: boolean;
    ff: boolean;
    pppppp: boolean;
    rfz: boolean;
    otherDynamics?: string;
    fz: boolean;
    ppppp: boolean;
    mf: boolean;
    pppp: boolean;
    fffff: boolean;
    sffz: boolean;
    sfp: boolean;
    p: boolean;
    ffff: boolean;
}

/**
 * Dynamics can be associated either with a note or a general
 * musical direction. To avoid inconsistencies between and
 * amongst the letter abbreviations for dynamics (what is sf
 * vs. sfz, standing alone or with a trailing dynamic that is
 * not always piano), we use the actual letters as the names
 * of these dynamic elements. The other-dynamics element
 * allows other dynamic marks that are not covered here, but
 * many of those should perhaps be included in a more general
 * musical direction element. Dynamics may also be combined as
 * in <sf/><mp/>.
 * 
 * These letter dynamic symbols are separated from crescendo,
 * decrescendo, and wedge indications. Dynamic representation
 * is inconsistent in scores. Many things are assumed by the
 * composer and left out, such as returns to original dynamics.
 * Systematic representations are quite complex: for example,
 * Humdrum has at least 3 representation formats related to
 * dynamics. The MusicXML format captures what is in the score,
 * but does not try to be optimal for analysis or synthesis of
 * dynamics.
 */
export interface DynamicsComplete extends PrintStyleAlignComplete, PlacementComplete, TextDecorationComplete, EnclosureComplete {
    fp: boolean;
    pp: boolean;
    ppp: boolean;
    fff: boolean;
    sf: boolean;
    rf: boolean;
    mp: boolean;
    sfpp: boolean;
    f: boolean;
    ffffff: boolean;
    sfz: boolean;
    ff: boolean;
    pppppp: boolean;
    rfz: boolean;
    otherDynamics: string;
    fz: boolean;
    ppppp: boolean;
    mf: boolean;
    pppp: boolean;
    fffff: boolean;
    sffz: boolean;
    sfp: boolean;
    p: boolean;
    ffff: boolean;
}


/**
 * Fingering is typically indicated 1,2,3,4,5. Multiple
 * fingerings may be given, typically to substitute
 * fingerings in the middle of a note. The substitution
 * and alternate values are "no" if the attribute is
 * not present. For guitar and other fretted instruments,
 * the fingering element represents the fretting finger;
 * the pluck element represents the plucking finger.
 */
export interface Fingering extends PrintStyle, Placement {
    substitution?: boolean;
    finger: number;
    alternate?: boolean;
}

/**
 * Fingering is typically indicated 1,2,3,4,5. Multiple
 * fingerings may be given, typically to substitute
 * fingerings in the middle of a note. The substitution
 * and alternate values are "no" if the attribute is
 * not present. For guitar and other fretted instruments,
 * the fingering element represents the fretting finger;
 * the pluck element represents the plucking finger.
 */
export interface FingeringComplete extends PrintStyleComplete, PlacementComplete {
    substitution: boolean;
    finger: number;
    alternate: boolean;
}


/**
 * Fret and string are used with tablature notation and chord
 * symbols. Fret numbers start with 0 for an open string and
 * 1 for the first fret. String numbers start with 1 for the
 * highest string. The string element can also be used in
 * regular notation.
 */
export interface Fret extends Font, Color {
    fret: number;
}

/**
 * Fret and string are used with tablature notation and chord
 * symbols. Fret numbers start with 0 for an open string and
 * 1 for the first fret. String numbers start with 1 for the
 * highest string. The string element can also be used in
 * regular notation.
 */
export interface FretComplete extends FontComplete, ColorComplete {
    fret: number;
}


/**
 * Fret and string are used with tablature notation and chord
 * symbols. Fret numbers start with 0 for an open string and
 * 1 for the first fret. String numbers start with 1 for the
 * highest string. The string element can also be used in
 * regular notation.
 */
export interface String extends PrintStyle, Placement {
    stringNum: number;
}

/**
 * Fret and string are used with tablature notation and chord
 * symbols. Fret numbers start with 0 for an open string and
 * 1 for the first fret. String numbers start with 1 for the
 * highest string. The string element can also be used in
 * regular notation.
 */
export interface StringComplete extends PrintStyleComplete, PlacementComplete {
    stringNum: number;
}


/**
 * The tuning-step, tuning-alter, and tuning-octave elements
 * are represented like the step, alter, and octave elements,
 * with different names to reflect their different function.
 * They are used in the staff-tuning and accord elements.
 */
export interface TuningAlter {
    step: string;
}

/**
 * The tuning-step, tuning-alter, and tuning-octave elements
 * are represented like the step, alter, and octave elements,
 * with different names to reflect their different function.
 * They are used in the staff-tuning and accord elements.
 */
export interface TuningAlterComplete {
    step: string;
}


/**
 * The tuning-step, tuning-alter, and tuning-octave elements
 * are represented like the step, alter, and octave elements,
 * with different names to reflect their different function.
 * They are used in the staff-tuning and accord elements.
 */
export interface TuningOctave {
    step: string;
}

/**
 * The tuning-step, tuning-alter, and tuning-octave elements
 * are represented like the step, alter, and octave elements,
 * with different names to reflect their different function.
 * They are used in the staff-tuning and accord elements.
 */
export interface TuningOctaveComplete {
    step: string;
}


/**
 * The display-text element is used for exact formatting of
 * multi-font text in element in display elements such as
 * part-name-display. Language is Italian ("it") by default.
 * Enclosure is none by default.
 */
export interface DisplayText extends TextFormatting {
    text: string;
}

/**
 * The display-text element is used for exact formatting of
 * multi-font text in element in display elements such as
 * part-name-display. Language is Italian ("it") by default.
 * Enclosure is none by default.
 */
export interface DisplayTextComplete extends TextFormattingComplete {
    text: string;
}


/**
 * The accidental-text element is used for exact formatting of
 * accidentals in display elements such as part-name-display.
 * Values are the same as for the accidental element.
 * Enclosure is none by default.
 */
export interface AccidentalText extends TextFormatting {
    text: string;
}

/**
 * The accidental-text element is used for exact formatting of
 * accidentals in display elements such as part-name-display.
 * Values are the same as for the accidental element.
 * Enclosure is none by default.
 */
export interface AccidentalTextComplete extends TextFormattingComplete {
    text: string;
}


/**
 * The part-name-display and part-abbreviation-display
 * elements are used in both the score.mod and direction.mod
 * files. They allow more precise control of how part names
 * and abbreviations appear throughout a score. The
 * print-object attributes can be used to determine what,
 * if anything, is printed at the start of each system.
 * Formatting specified in the part-name-display and
 * part-abbreviation-display elements override the formatting
 * specified in the part-name and part-abbreviation elements,
 * respectively.
 */
export interface PartNameDisplay extends PrintObject {
    name: TextArray;
}

/**
 * The part-name-display and part-abbreviation-display
 * elements are used in both the score.mod and direction.mod
 * files. They allow more precise control of how part names
 * and abbreviations appear throughout a score. The
 * print-object attributes can be used to determine what,
 * if anything, is printed at the start of each system.
 * Formatting specified in the part-name-display and
 * part-abbreviation-display elements override the formatting
 * specified in the part-name and part-abbreviation elements,
 * respectively.
 */
export interface PartNameDisplayComplete extends PrintObjectComplete {
    name: TextArray;
}


/**
 * The part-name-display and part-abbreviation-display
 * elements are used in both the score.mod and direction.mod
 * files. They allow more precise control of how part names
 * and abbreviations appear throughout a score. The
 * print-object attributes can be used to determine what,
 * if anything, is printed at the start of each system.
 * Formatting specified in the part-name-display and
 * part-abbreviation-display elements override the formatting
 * specified in the part-name and part-abbreviation elements,
 * respectively.
 */
export interface PartAbbreviationDisplay extends PrintObject {
    name: TextArray;
}

/**
 * The part-name-display and part-abbreviation-display
 * elements are used in both the score.mod and direction.mod
 * files. They allow more precise control of how part names
 * and abbreviations appear throughout a score. The
 * print-object attributes can be used to determine what,
 * if anything, is printed at the start of each system.
 * Formatting specified in the part-name-display and
 * part-abbreviation-display elements override the formatting
 * specified in the part-name and part-abbreviation elements,
 * respectively.
 */
export interface PartAbbreviationDisplayComplete extends PrintObjectComplete {
    name: TextArray;
}


/**
 * The midi-device content corresponds to the DeviceName
 * meta event in Standard MIDI Files. The optional port
 * attribute is a number from 1 to 16 that can be used
 * with the unofficial MIDI port (or cable) meta event.
 * Unlike the DeviceName meta event, there can be
 * multiple midi-device elements per MusicXML part
 * starting in MusicXML 3.0. The optional id attribute
 * refers to the score-instrument assigned to this
 * device. If missing, the device assignment affects
 * all score-instrument elements in the score-part.
 */
export interface MidiDevice {
    port?: number;
    deviceName: string;
    id?: number;
}

/**
 * The midi-device content corresponds to the DeviceName
 * meta event in Standard MIDI Files. The optional port
 * attribute is a number from 1 to 16 that can be used
 * with the unofficial MIDI port (or cable) meta event.
 * Unlike the DeviceName meta event, there can be
 * multiple midi-device elements per MusicXML part
 * starting in MusicXML 3.0. The optional id attribute
 * refers to the score-instrument assigned to this
 * device. If missing, the device assignment affects
 * all score-instrument elements in the score-part.
 */
export interface MidiDeviceComplete {
    port: number;
    deviceName: string;
    id: number;
}


/**
 * MIDI 1.0 channel numbers range from 1 to 16.
 */
export function verifyMidiChannel(m: number) {
    assert(m >= 1 && m <= 16);
}

/**
 *  midi 1.0 bank numbers range from 1 to 16,384. 
 */
export function verifyMidiBank(m: number) {
    assert(m >= 1 && m <= 16384);
}

/**
 *  MIDI 1.0 program numbers range from 1 to 128. 
 */
export function verifyMidiProgram(m: number) {
    assert(m >= 1 && m <= 128);
}

/**
 * For unpitched instruments, specify a MIDI 1.0 note number
 * ranging from 1 to 128. It is usually used with MIDI banks for
 * percussion. Note that MIDI 1.0 note numbers are generally
 * specified from 0 to 127 rather than the 1 to 128 numbering
 * used in this element.
 */
export function verifyMidiUnpitched(m: number) {
    assert(m >= 1 && m <= 128);
}

/**
 * The volume value is a percentage of the maximum
 * ranging from 0 to 100, with decimal values allowed.
 * This corresponds to a scaling value for the MIDI 1.0
 * channel volume controller.
 */
export function verifyVolume(m: number) {
    assert(m >= 1 && m <= 100);
}

/**
 * Pan and elevation allow placing of sound in a 3-D space
 * relative to the listener. Both are expressed in degrees
 * ranging from -180 to 180. For pan, 0 is straight ahead,
 * -90 is hard left, 90 is hard right, and -180 and 180
 * are directly behind the listener. For elevation, 0 is
 * level with the listener, 90 is directly above, and -90
 * is directly below.
 */
export function verifyPan(m: number) {
    assert(m >= -180 && m <= 180);
}

/**
 * Pan and elevation allow placing of sound in a 3-D space
 * relative to the listener. Both are expressed in degrees
 * ranging from -180 to 180. For pan, 0 is straight ahead,
 * -90 is hard left, 90 is hard right, and -180 and 180
 * are directly behind the listener. For elevation, 0 is
 * level with the listener, 90 is directly above, and -90
 * is directly below.
 */
export function verifyElevation(m: number) {
    assert(m >= -180 && m <= 180);
}

/**
 * The midi-instrument element can be a part of either
 * the score-instrument element at the start of a part,
 * or the sound element within a part. The id attribute
 * refers to the score-instrument affected by the change.
 */
export interface MidiInstrument {
    midiUnpitched?: number;
    volume?: number;
    pan?: number;
    elevation?: number;
    midiBank?: number;
    midiProgram?: number;
    id: string;
    midiChannel?: number;
    midiName?: string;
}

/**
 * The midi-instrument element can be a part of either
 * the score-instrument element at the start of a part,
 * or the sound element within a part. The id attribute
 * refers to the score-instrument affected by the change.
 */
export interface MidiInstrumentComplete {
    midiUnpitched: number;
    volume: number;
    pan: number;
    elevation: number;
    midiBank: number;
    midiProgram: number;
    id: string;
    midiChannel: number;
    midiName: string;
}


/**
 * The play element, new in Version 3.0, specifies playback
 * techniques to be used in conjunction with the instrument-sound
 * element. When used as part of a sound element, it applies to
 * all notes going forward in score order. In multi-instrument
 * parts, the affected instrument should be specified using the
 * id attribute. When used as part of a note element, it applies
 * to the current note only.
 */
export interface Play {
    ipa?: string;
    mute?: string;
    otherPlay?: string;
    semiPitched?: string;
}

/**
 * The play element, new in Version 3.0, specifies playback
 * techniques to be used in conjunction with the instrument-sound
 * element. When used as part of a sound element, it applies to
 * all notes going forward in score order. In multi-instrument
 * parts, the affected instrument should be specified using the
 * id attribute. When used as part of a note element, it applies
 * to the current note only.
 */
export interface PlayComplete {
    ipa: string;
    mute: string;
    otherPlay: string;
    semiPitched: string;
}


/**
 * A width, in mm. Most widths are in terms of "tenths" rather than millimeters.
 */
export interface Millimeters extends String {}

/**
 * Margins, page sizes, and distances are all measured in
 * tenths to keep MusicXML data in a consistent coordinate
 * system as much as possible. The translation to absolute
 * units is done in the scaling element, which specifies
 * how many millimeters are equal to how many tenths. For
 * a staff height of 7 mm, millimeters would be set to 7
 * while tenths is set to 40. The ability to set a formula
 * rather than a single scaling factor helps avoid roundoff
 * errors.
 */
export interface Scaling {
    tenths?: number;
    millimeters?: number;
}

/**
 * Margins, page sizes, and distances are all measured in
 * tenths to keep MusicXML data in a consistent coordinate
 * system as much as possible. The translation to absolute
 * units is done in the scaling element, which specifies
 * how many millimeters are equal to how many tenths. For
 * a staff height of 7 mm, millimeters would be set to 7
 * while tenths is set to 40. The ability to set a formula
 * rather than a single scaling factor helps avoid roundoff
 * errors.
 */
export interface ScalingComplete {
    tenths: number;
    millimeters: number;
}


/**
 * Margin elements are included within many of the larger
 * layout elements.
 */
export interface LeftMargin extends String {}

/**
 * Margin elements are included within many of the larger
 * layout elements.
 */
export interface RightMargin extends String {}

/**
 * Margin elements are included within many of the larger
 * layout elements.
 */
export interface TopMargin extends String {}

/**
 * Margin elements are included within many of the larger
 * layout elements.
 */
export interface BottomMargin extends String {}

/**
 * Page layout can be defined both in score-wide defaults
 * and in the print element. Page margins are specified either
 * for both even and odd pages, or via separate odd and even
 * page number values. The type is not needed when used as
 * part of a print element. If omitted when used in the
 * defaults element, "both" is the default.
 */
export interface PageHeight extends String {}

/**
 * Page layout can be defined both in score-wide defaults
 * and in the print element. Page margins are specified either
 * for both even and odd pages, or via separate odd and even
 * page number values. The type is not needed when used as
 * part of a print element. If omitted when used in the
 * defaults element, "both" is the default.
 */
export interface PageWidth extends String {}

export enum OddEvenBoth {
    Both = 2,
    Even = 1,
    Odd = 0
}

/**
 * Page layout can be defined both in score-wide defaults
 * and in the print element. Page margins are specified either
 * for both even and odd pages, or via separate odd and even
 * page number values.
 */
export interface PageMargins {
    topMargin: number;
    leftMargin: number;
    bottomMargin: number;
    type?: OddEvenBoth;
    rightMargin: number;
}

/**
 * Page layout can be defined both in score-wide defaults
 * and in the print element. Page margins are specified either
 * for both even and odd pages, or via separate odd and even
 * page number values.
 */
export interface PageMarginsComplete {
    topMargin: number;
    leftMargin: number;
    bottomMargin: number;
    type: OddEvenBoth;
    rightMargin: number;
}


/**
 * Page layout can be defined both in score-wide defaults
 * and in the print element. Page margins are specified either
 * for both even and odd pages, or via separate odd and even
 * page number values. The type is not needed when used as
 * part of a print element. If omitted when used in the
 * defaults element, "both" is the default.
 */
export interface PageLayout {
    pageHeight?: number;
    pageWidth?: number;
    pageMargins?: PageMargins[];
}

/**
 * Page layout can be defined both in score-wide defaults
 * and in the print element. Page margins are specified either
 * for both even and odd pages, or via separate odd and even
 * page number values. The type is not needed when used as
 * part of a print element. If omitted when used in the
 * defaults element, "both" is the default.
 */
export interface PageLayoutComplete {
    pageHeight: number;
    pageWidth: number;
    pageMargins: PageMargins[];
}


/**
 * A system is a group of staves that are read and played
 * simultaneously. System layout includes left and right
 * margins, the vertical distance from the previous system,
 * and the presence or absence of system dividers.
 * 
 * Margins are relative to the page margins. Positive values
 * indent and negative values reduce the margin size. The
 * system distance is measured from the bottom line of the
 * previous system to the top line of the current system.
 * It is ignored for the first system on a page. The top
 * system distance is measured from the page's top margin to
 * the top line of the first system. It is ignored for all
 * but the first system on a page.
 * 
 * Sometimes the sum of measure widths in a system may not
 * equal the system width specified by the layout elements due
 * to roundoff or other errors. The behavior when reading
 * MusicXML files in these cases is application-dependent.
 * For instance, applications may find that the system layout
 * data is more reliable than the sum of the measure widths,
 * and adjust the measure widths accordingly.
 * 
 * When used in the layout element, the system-layout element
 * defines a default appearance for all systems in the score.
 * When used in the print element, the system layout element
 * affects the appearance of the current system only. All
 * other systems use the default values provided in the
 * defaults element. If any child elements are missing from
 * the system-layout element in a print element, the values
 * from the defaults element are used there as well.
 */
export interface SystemDistance extends String {}

/**
 * A system is a group of staves that are read and played
 * simultaneously. System layout includes left and right
 * margins, the vertical distance from the previous system,
 * and the presence or absence of system dividers.
 * 
 * Margins are relative to the page margins. Positive values
 * indent and negative values reduce the margin size. The
 * system distance is measured from the bottom line of the
 * previous system to the top line of the current system.
 * It is ignored for the first system on a page. The top
 * system distance is measured from the page's top margin to
 * the top line of the first system. It is ignored for all
 * but the first system on a page.
 * 
 * Sometimes the sum of measure widths in a system may not
 * equal the system width specified by the layout elements due
 * to roundoff or other errors. The behavior when reading
 * MusicXML files in these cases is application-dependent.
 * For instance, applications may find that the system layout
 * data is more reliable than the sum of the measure widths,
 * and adjust the measure widths accordingly.
 * 
 * When used in the layout element, the system-layout element
 * defines a default appearance for all systems in the score.
 * When used in the print element, the system layout element
 * affects the appearance of the current system only. All
 * other systems use the default values provided in the
 * defaults element. If any child elements are missing from
 * the system-layout element in a print element, the values
 * from the defaults element are used there as well.
 */
export interface TopSystemDistance extends String {}

/**
 * A system is a group of staves that are read and played
 * simultaneously. System layout includes left and right
 * margins, the vertical distance from the previous system,
 * and the presence or absence of system dividers.
 * 
 * Margins are relative to the page margins. Positive values
 * indent and negative values reduce the margin size. The
 * system distance is measured from the bottom line of the
 * previous system to the top line of the current system.
 * It is ignored for the first system on a page. The top
 * system distance is measured from the page's top margin to
 * the top line of the first system. It is ignored for all
 * but the first system on a page.
 * 
 * Sometimes the sum of measure widths in a system may not
 * equal the system width specified by the layout elements due
 * to roundoff or other errors. The behavior when reading
 * MusicXML files in these cases is application-dependent.
 * For instance, applications may find that the system layout
 * data is more reliable than the sum of the measure widths,
 * and adjust the measure widths accordingly.
 * 
 * When used in the layout element, the system-layout element
 * defines a default appearance for all systems in the score.
 * When used in the print element, the system layout element
 * affects the appearance of the current system only. All
 * other systems use the default values provided in the
 * defaults element. If any child elements are missing from
 * the system-layout element in a print element, the values
 * from the defaults element are used there as well.
 */
export interface SystemLayout {
    systemDividers?: SystemDividers;
    systemMargins?: SystemMargins;
    systemDistance?: number;
    topSystemDistance?: number;
}

/**
 * A system is a group of staves that are read and played
 * simultaneously. System layout includes left and right
 * margins, the vertical distance from the previous system,
 * and the presence or absence of system dividers.
 * 
 * Margins are relative to the page margins. Positive values
 * indent and negative values reduce the margin size. The
 * system distance is measured from the bottom line of the
 * previous system to the top line of the current system.
 * It is ignored for the first system on a page. The top
 * system distance is measured from the page's top margin to
 * the top line of the first system. It is ignored for all
 * but the first system on a page.
 * 
 * Sometimes the sum of measure widths in a system may not
 * equal the system width specified by the layout elements due
 * to roundoff or other errors. The behavior when reading
 * MusicXML files in these cases is application-dependent.
 * For instance, applications may find that the system layout
 * data is more reliable than the sum of the measure widths,
 * and adjust the measure widths accordingly.
 * 
 * When used in the layout element, the system-layout element
 * defines a default appearance for all systems in the score.
 * When used in the print element, the system layout element
 * affects the appearance of the current system only. All
 * other systems use the default values provided in the
 * defaults element. If any child elements are missing from
 * the system-layout element in a print element, the values
 * from the defaults element are used there as well.
 */
export interface SystemLayoutComplete {
    systemDividers: SystemDividers;
    systemMargins: SystemMargins;
    systemDistance: number;
    topSystemDistance: number;
}


/**
 * A system is a group of staves that are read and played
 * simultaneously. System layout includes left and right
 * margins, the vertical distance from the previous system,
 * and the presence or absence of system dividers.
 * 
 * Margins are relative to the page margins. Positive values
 * indent and negative values reduce the margin size. The
 * system distance is measured from the bottom line of the
 * previous system to the top line of the current system.
 * It is ignored for the first system on a page. The top
 * system distance is measured from the page's top margin to
 * the top line of the first system. It is ignored for all
 * but the first system on a page.
 * 
 * Sometimes the sum of measure widths in a system may not
 * equal the system width specified by the layout elements due
 * to roundoff or other errors. The behavior when reading
 * MusicXML files in these cases is application-dependent.
 * For instance, applications may find that the system layout
 * data is more reliable than the sum of the measure widths,
 * and adjust the measure widths accordingly.
 * 
 * When used in the layout element, the system-layout element
 * defines a default appearance for all systems in the score.
 * When used in the print element, the system layout element
 * affects the appearance of the current system only. All
 * other systems use the default values provided in the
 * defaults element. If any child elements are missing from
 * the system-layout element in a print element, the values
 * from the defaults element are used there as well.
 */
export interface SystemMargins {
    leftMargin: number;
    rightMargin: number;
}

/**
 * A system is a group of staves that are read and played
 * simultaneously. System layout includes left and right
 * margins, the vertical distance from the previous system,
 * and the presence or absence of system dividers.
 * 
 * Margins are relative to the page margins. Positive values
 * indent and negative values reduce the margin size. The
 * system distance is measured from the bottom line of the
 * previous system to the top line of the current system.
 * It is ignored for the first system on a page. The top
 * system distance is measured from the page's top margin to
 * the top line of the first system. It is ignored for all
 * but the first system on a page.
 * 
 * Sometimes the sum of measure widths in a system may not
 * equal the system width specified by the layout elements due
 * to roundoff or other errors. The behavior when reading
 * MusicXML files in these cases is application-dependent.
 * For instance, applications may find that the system layout
 * data is more reliable than the sum of the measure widths,
 * and adjust the measure widths accordingly.
 * 
 * When used in the layout element, the system-layout element
 * defines a default appearance for all systems in the score.
 * When used in the print element, the system layout element
 * affects the appearance of the current system only. All
 * other systems use the default values provided in the
 * defaults element. If any child elements are missing from
 * the system-layout element in a print element, the values
 * from the defaults element are used there as well.
 */
export interface SystemMarginsComplete {
    leftMargin: number;
    rightMargin: number;
}


/**
 * The system-dividers element indicates the presence or
 * absence of system dividers (also known as system separation
 * marks) between systems displayed on the same page. Dividers
 * on the left and right side of the page are controlled by
 * the left-divider and right-divider elements respectively.
 * The default vertical position is half the system-distance
 * value from the top of the system that is below the divider.
 * The default horizontal position is the left and right
 * system margin, respectively.
 * 
 * When used in the print element, the system-dividers element
 * affects the dividers that would appear between the current
 * system and the previous system.
 */
export interface SystemDividers {
    rightDivider: RightDivider;
    leftDivider: LeftDivider;
}

/**
 * The system-dividers element indicates the presence or
 * absence of system dividers (also known as system separation
 * marks) between systems displayed on the same page. Dividers
 * on the left and right side of the page are controlled by
 * the left-divider and right-divider elements respectively.
 * The default vertical position is half the system-distance
 * value from the top of the system that is below the divider.
 * The default horizontal position is the left and right
 * system margin, respectively.
 * 
 * When used in the print element, the system-dividers element
 * affects the dividers that would appear between the current
 * system and the previous system.
 */
export interface SystemDividersComplete {
    rightDivider: RightDivider;
    leftDivider: LeftDivider;
}


/**
 * The system-dividers element indicates the presence or
 * absence of system dividers (also known as system separation
 * marks) between systems displayed on the same page. Dividers
 * on the left and right side of the page are controlled by
 * the left-divider and right-divider elements respectively.
 * The default vertical position is half the system-distance
 * value from the top of the system that is below the divider.
 * The default horizontal position is the left and right
 * system margin, respectively.
 * 
 * When used in the print element, the system-dividers element
 * affects the dividers that would appear between the current
 * system and the previous system.
 */
export interface LeftDivider extends PrintObject, PrintStyleAlign {
}

/**
 * The system-dividers element indicates the presence or
 * absence of system dividers (also known as system separation
 * marks) between systems displayed on the same page. Dividers
 * on the left and right side of the page are controlled by
 * the left-divider and right-divider elements respectively.
 * The default vertical position is half the system-distance
 * value from the top of the system that is below the divider.
 * The default horizontal position is the left and right
 * system margin, respectively.
 * 
 * When used in the print element, the system-dividers element
 * affects the dividers that would appear between the current
 * system and the previous system.
 */
export interface LeftDividerComplete extends PrintObjectComplete, PrintStyleAlignComplete {
}


/**
 * The system-dividers element indicates the presence or
 * absence of system dividers (also known as system separation
 * marks) between systems displayed on the same page. Dividers
 * on the left and right side of the page are controlled by
 * the left-divider and right-divider elements respectively.
 * The default vertical position is half the system-distance
 * value from the top of the system that is below the divider.
 * The default horizontal position is the left and right
 * system margin, respectively.
 * 
 * When used in the print element, the system-dividers element
 * affects the dividers that would appear between the current
 * system and the previous system.
 */
export interface RightDivider extends PrintObject, PrintStyleAlign {
}

/**
 * The system-dividers element indicates the presence or
 * absence of system dividers (also known as system separation
 * marks) between systems displayed on the same page. Dividers
 * on the left and right side of the page are controlled by
 * the left-divider and right-divider elements respectively.
 * The default vertical position is half the system-distance
 * value from the top of the system that is below the divider.
 * The default horizontal position is the left and right
 * system margin, respectively.
 * 
 * When used in the print element, the system-dividers element
 * affects the dividers that would appear between the current
 * system and the previous system.
 */
export interface RightDividerComplete extends PrintObjectComplete, PrintStyleAlignComplete {
}


/**
 * Staff layout includes the vertical distance from the bottom
 * line of the previous staff in this system to the top line
 * of the staff specified by the number attribute. The
 * optional number attribute refers to staff numbers within
 * the part, from top to bottom on the system. A value of 1
 * is assumed if not present. When used in the defaults
 * element, the values apply to all parts. This value is
 * ignored for the first staff in a system.
 */
export interface StaffDistance extends String {}

/**
 * Staff layout includes the vertical distance from the bottom
 * line of the previous staff in this system to the top line
 * of the staff specified by the number attribute. The
 * optional number attribute refers to staff numbers within
 * the part, from top to bottom on the system. A value of 1
 * is assumed if not present. When used in the defaults
 * element, the values apply to all parts. This value is
 * ignored for the first staff in a system.
 */
export interface StaffLayout {
    staffDistance?: number;
    num: number;
}

/**
 * Staff layout includes the vertical distance from the bottom
 * line of the previous staff in this system to the top line
 * of the staff specified by the number attribute. The
 * optional number attribute refers to staff numbers within
 * the part, from top to bottom on the system. A value of 1
 * is assumed if not present. When used in the defaults
 * element, the values apply to all parts. This value is
 * ignored for the first staff in a system.
 */
export interface StaffLayoutComplete {
    staffDistance: number;
    num: number;
}


/**
 * Measure layout includes the horizontal distance from the
 * previous measure. This value is only used for systems
 * where there is horizontal whitespace in the middle of a
 * system, as in systems with codas. To specify the measure
 * width, use the width attribute of the measure element.
 */
export interface MeasureDistance extends String {}

/**
 * Measure layout includes the horizontal distance from the
 * previous measure. This value is only used for systems
 * where there is horizontal whitespace in the middle of a
 * system, as in systems with codas. To specify the measure
 * width, use the width attribute of the measure element.
 */
export interface MeasureLayout {
    measureDistance?: number;
}

/**
 * Measure layout includes the horizontal distance from the
 * previous measure. This value is only used for systems
 * where there is horizontal whitespace in the middle of a
 * system, as in systems with codas. To specify the measure
 * width, use the width attribute of the measure element.
 */
export interface MeasureLayoutComplete {
    measureDistance: number;
}


/**
 * The appearance element controls general graphical
 * settings for the music's final form appearance on a
 * printed page of display. This includes support
 * for line widths, definitions for note sizes, and standard
 * distances between notation elements, plus an extension
 * element for other aspects of appearance.
 * 
 * The line-width element indicates the width of a line type
 * in tenths. The type attribute defines what type of line is
 * being defined. Values include beam, bracket, dashes,
 * enclosure, ending, extend, heavy barline, leger,
 * light barline, octave shift, pedal, slur middle, slur tip,
 * staff, stem, tie middle, tie tip, tuplet bracket, and
 * wedge. The text content is expressed in tenths.
 * 
 * The note-size element indicates the percentage of the
 * regular note size to use for notes with a cue and large
 * size as defined in the type element. The grace type is
 * used for notes of cue size that that include a grace
 * element. The cue type is used for all other notes with
 * cue size, whether defined explicitly or implicitly via a
 * cue element. The large type is used for notes of large
 * size. The text content represent the numeric percentage.
 * A value of 100 would be identical to the size of a regular
 * note as defined by the music font.
 * 
 * The distance element represents standard distances between
 * notation elements in tenths. The type attribute defines what
 * type of distance is being defined. Values include hyphen
 * (for hyphens in lyrics) and beam.
 * 
 * The other-appearance element is used to define any
 * graphical settings not yet in the current version of the
 * MusicXML format. This allows extended representation,
 * though without application interoperability.
 */
export interface LineWidth {
    tenths: number;
    type: string;
}

/**
 * The appearance element controls general graphical
 * settings for the music's final form appearance on a
 * printed page of display. This includes support
 * for line widths, definitions for note sizes, and standard
 * distances between notation elements, plus an extension
 * element for other aspects of appearance.
 * 
 * The line-width element indicates the width of a line type
 * in tenths. The type attribute defines what type of line is
 * being defined. Values include beam, bracket, dashes,
 * enclosure, ending, extend, heavy barline, leger,
 * light barline, octave shift, pedal, slur middle, slur tip,
 * staff, stem, tie middle, tie tip, tuplet bracket, and
 * wedge. The text content is expressed in tenths.
 * 
 * The note-size element indicates the percentage of the
 * regular note size to use for notes with a cue and large
 * size as defined in the type element. The grace type is
 * used for notes of cue size that that include a grace
 * element. The cue type is used for all other notes with
 * cue size, whether defined explicitly or implicitly via a
 * cue element. The large type is used for notes of large
 * size. The text content represent the numeric percentage.
 * A value of 100 would be identical to the size of a regular
 * note as defined by the music font.
 * 
 * The distance element represents standard distances between
 * notation elements in tenths. The type attribute defines what
 * type of distance is being defined. Values include hyphen
 * (for hyphens in lyrics) and beam.
 * 
 * The other-appearance element is used to define any
 * graphical settings not yet in the current version of the
 * MusicXML format. This allows extended representation,
 * though without application interoperability.
 */
export interface LineWidthComplete {
    tenths: number;
    type: string;
}


export enum CueGraceLarge {
    Grace = 1,
    Cue = 0,
    Large = 2
}

/**
 * The appearance element controls general graphical
 * settings for the music's final form appearance on a
 * printed page of display. This includes support
 * for line widths, definitions for note sizes, and standard
 * distances between notation elements, plus an extension
 * element for other aspects of appearance.
 * 
 * The line-width element indicates the width of a line type
 * in tenths. The type attribute defines what type of line is
 * being defined. Values include beam, bracket, dashes,
 * enclosure, ending, extend, heavy barline, leger,
 * light barline, octave shift, pedal, slur middle, slur tip,
 * staff, stem, tie middle, tie tip, tuplet bracket, and
 * wedge. The text content is expressed in tenths.
 * 
 * The note-size element indicates the percentage of the
 * regular note size to use for notes with a cue and large
 * size as defined in the type element. The grace type is
 * used for notes of cue size that that include a grace
 * element. The cue type is used for all other notes with
 * cue size, whether defined explicitly or implicitly via a
 * cue element. The large type is used for notes of large
 * size. The text content represent the numeric percentage.
 * A value of 100 would be identical to the size of a regular
 * note as defined by the music font.
 * 
 * The distance element represents standard distances between
 * notation elements in tenths. The type attribute defines what
 * type of distance is being defined. Values include hyphen
 * (for hyphens in lyrics) and beam.
 * 
 * The other-appearance element is used to define any
 * graphical settings not yet in the current version of the
 * MusicXML format. This allows extended representation,
 * though without application interoperability.
 */
export interface NoteSize {
    size: number;
    type: CueGraceLarge;
}

/**
 * The appearance element controls general graphical
 * settings for the music's final form appearance on a
 * printed page of display. This includes support
 * for line widths, definitions for note sizes, and standard
 * distances between notation elements, plus an extension
 * element for other aspects of appearance.
 * 
 * The line-width element indicates the width of a line type
 * in tenths. The type attribute defines what type of line is
 * being defined. Values include beam, bracket, dashes,
 * enclosure, ending, extend, heavy barline, leger,
 * light barline, octave shift, pedal, slur middle, slur tip,
 * staff, stem, tie middle, tie tip, tuplet bracket, and
 * wedge. The text content is expressed in tenths.
 * 
 * The note-size element indicates the percentage of the
 * regular note size to use for notes with a cue and large
 * size as defined in the type element. The grace type is
 * used for notes of cue size that that include a grace
 * element. The cue type is used for all other notes with
 * cue size, whether defined explicitly or implicitly via a
 * cue element. The large type is used for notes of large
 * size. The text content represent the numeric percentage.
 * A value of 100 would be identical to the size of a regular
 * note as defined by the music font.
 * 
 * The distance element represents standard distances between
 * notation elements in tenths. The type attribute defines what
 * type of distance is being defined. Values include hyphen
 * (for hyphens in lyrics) and beam.
 * 
 * The other-appearance element is used to define any
 * graphical settings not yet in the current version of the
 * MusicXML format. This allows extended representation,
 * though without application interoperability.
 */
export interface NoteSizeComplete {
    size: number;
    type: CueGraceLarge;
}


/**
 * The appearance element controls general graphical
 * settings for the music's final form appearance on a
 * printed page of display. This includes support
 * for line widths, definitions for note sizes, and standard
 * distances between notation elements, plus an extension
 * element for other aspects of appearance.
 * 
 * The line-width element indicates the width of a line type
 * in tenths. The type attribute defines what type of line is
 * being defined. Values include beam, bracket, dashes,
 * enclosure, ending, extend, heavy barline, leger,
 * light barline, octave shift, pedal, slur middle, slur tip,
 * staff, stem, tie middle, tie tip, tuplet bracket, and
 * wedge. The text content is expressed in tenths.
 * 
 * The note-size element indicates the percentage of the
 * regular note size to use for notes with a cue and large
 * size as defined in the type element. The grace type is
 * used for notes of cue size that that include a grace
 * element. The cue type is used for all other notes with
 * cue size, whether defined explicitly or implicitly via a
 * cue element. The large type is used for notes of large
 * size. The text content represent the numeric percentage.
 * A value of 100 would be identical to the size of a regular
 * note as defined by the music font.
 * 
 * The distance element represents standard distances between
 * notation elements in tenths. The type attribute defines what
 * type of distance is being defined. Values include hyphen
 * (for hyphens in lyrics) and beam.
 * 
 * The other-appearance element is used to define any
 * graphical settings not yet in the current version of the
 * MusicXML format. This allows extended representation,
 * though without application interoperability.
 */
export interface Distance {
    tenths: number;
    type: string;
}

/**
 * The appearance element controls general graphical
 * settings for the music's final form appearance on a
 * printed page of display. This includes support
 * for line widths, definitions for note sizes, and standard
 * distances between notation elements, plus an extension
 * element for other aspects of appearance.
 * 
 * The line-width element indicates the width of a line type
 * in tenths. The type attribute defines what type of line is
 * being defined. Values include beam, bracket, dashes,
 * enclosure, ending, extend, heavy barline, leger,
 * light barline, octave shift, pedal, slur middle, slur tip,
 * staff, stem, tie middle, tie tip, tuplet bracket, and
 * wedge. The text content is expressed in tenths.
 * 
 * The note-size element indicates the percentage of the
 * regular note size to use for notes with a cue and large
 * size as defined in the type element. The grace type is
 * used for notes of cue size that that include a grace
 * element. The cue type is used for all other notes with
 * cue size, whether defined explicitly or implicitly via a
 * cue element. The large type is used for notes of large
 * size. The text content represent the numeric percentage.
 * A value of 100 would be identical to the size of a regular
 * note as defined by the music font.
 * 
 * The distance element represents standard distances between
 * notation elements in tenths. The type attribute defines what
 * type of distance is being defined. Values include hyphen
 * (for hyphens in lyrics) and beam.
 * 
 * The other-appearance element is used to define any
 * graphical settings not yet in the current version of the
 * MusicXML format. This allows extended representation,
 * though without application interoperability.
 */
export interface DistanceComplete {
    tenths: number;
    type: string;
}


/**
 * The appearance element controls general graphical
 * settings for the music's final form appearance on a
 * printed page of display. This includes support
 * for line widths, definitions for note sizes, and standard
 * distances between notation elements, plus an extension
 * element for other aspects of appearance.
 * 
 * The line-width element indicates the width of a line type
 * in tenths. The type attribute defines what type of line is
 * being defined. Values include beam, bracket, dashes,
 * enclosure, ending, extend, heavy barline, leger,
 * light barline, octave shift, pedal, slur middle, slur tip,
 * staff, stem, tie middle, tie tip, tuplet bracket, and
 * wedge. The text content is expressed in tenths.
 * 
 * The note-size element indicates the percentage of the
 * regular note size to use for notes with a cue and large
 * size as defined in the type element. The grace type is
 * used for notes of cue size that that include a grace
 * element. The cue type is used for all other notes with
 * cue size, whether defined explicitly or implicitly via a
 * cue element. The large type is used for notes of large
 * size. The text content represent the numeric percentage.
 * A value of 100 would be identical to the size of a regular
 * note as defined by the music font.
 * 
 * The distance element represents standard distances between
 * notation elements in tenths. The type attribute defines what
 * type of distance is being defined. Values include hyphen
 * (for hyphens in lyrics) and beam.
 * 
 * The other-appearance element is used to define any
 * graphical settings not yet in the current version of the
 * MusicXML format. This allows extended representation,
 * though without application interoperability.
 */
export interface Appearance {
    lineWidths?: {[key: string]: LineWidth};
    distances?: {[key: string]: Distance};
    otherAppearances?: string[];
    noteSizes?: {[key: string]: NoteSize};
}

/**
 * The appearance element controls general graphical
 * settings for the music's final form appearance on a
 * printed page of display. This includes support
 * for line widths, definitions for note sizes, and standard
 * distances between notation elements, plus an extension
 * element for other aspects of appearance.
 * 
 * The line-width element indicates the width of a line type
 * in tenths. The type attribute defines what type of line is
 * being defined. Values include beam, bracket, dashes,
 * enclosure, ending, extend, heavy barline, leger,
 * light barline, octave shift, pedal, slur middle, slur tip,
 * staff, stem, tie middle, tie tip, tuplet bracket, and
 * wedge. The text content is expressed in tenths.
 * 
 * The note-size element indicates the percentage of the
 * regular note size to use for notes with a cue and large
 * size as defined in the type element. The grace type is
 * used for notes of cue size that that include a grace
 * element. The cue type is used for all other notes with
 * cue size, whether defined explicitly or implicitly via a
 * cue element. The large type is used for notes of large
 * size. The text content represent the numeric percentage.
 * A value of 100 would be identical to the size of a regular
 * note as defined by the music font.
 * 
 * The distance element represents standard distances between
 * notation elements in tenths. The type attribute defines what
 * type of distance is being defined. Values include hyphen
 * (for hyphens in lyrics) and beam.
 * 
 * The other-appearance element is used to define any
 * graphical settings not yet in the current version of the
 * MusicXML format. This allows extended representation,
 * though without application interoperability.
 */
export interface AppearanceComplete {
    lineWidths: {[key: string]: LineWidth};
    distances: {[key: string]: Distance};
    otherAppearances: string[];
    noteSizes: {[key: string]: NoteSize};
}


/**
 * The creator element is borrowed from Dublin Core. It is
 * used for the creators of the score. The type attribute is
 * used to distinguish different creative contributions. Thus,
 * there can be multiple creators within an identification.
 */
export interface Creator {
    creator: string;
    type: string;
}

/**
 * The creator element is borrowed from Dublin Core. It is
 * used for the creators of the score. The type attribute is
 * used to distinguish different creative contributions. Thus,
 * there can be multiple creators within an identification.
 */
export interface CreatorComplete {
    creator: string;
    type: string;
}


/**
 * Rights is borrowed from Dublin Core. It contains
 * copyright and other intellectual property notices.
 * Words, music, and derivatives can have different types,
 * so multiple rights tags with different type attributes
 * are supported.
 */
export interface Rights {
    type: string;
    rights: string;
}

/**
 * Rights is borrowed from Dublin Core. It contains
 * copyright and other intellectual property notices.
 * Words, music, and derivatives can have different types,
 * so multiple rights tags with different type attributes
 * are supported.
 */
export interface RightsComplete {
    type: string;
    rights: string;
}


/**
 * The software used to encode the music.
 */
export interface Encoder {
    encoder: string;
    type: string;
}

/**
 * The software used to encode the music.
 */
export interface EncoderComplete {
    encoder: string;
    type: string;
}


/**
 * 
 * The source for the music that is encoded. This is similar
 * to the Dublin Core source element.
 */
export interface Source {
    source: string;
}

/**
 * 
 * The source for the music that is encoded. This is similar
 * to the Dublin Core source element.
 */
export interface SourceComplete {
    source: string;
}


/**
 * A related resource for the music that is encoded. This is
 * similar to the Dublin Core relation element.
 */
export interface Relation {
    type: string;
    data: string;
}

/**
 * A related resource for the music that is encoded. This is
 * similar to the Dublin Core relation element.
 */
export interface RelationComplete {
    type: string;
    data: string;
}


/**
 * If a program has other metadata not yet supported in the
 * MusicXML format, it can go in the miscellaneous area.
 */
export interface MiscellaneousField {
    data: string;
    name: string;
}

/**
 * If a program has other metadata not yet supported in the
 * MusicXML format, it can go in the miscellaneous area.
 */
export interface MiscellaneousFieldComplete {
    data: string;
    name: string;
}


/**
 * 
 * If a program has other metadata not yet supported in the
 * MusicXML format, it can go in the miscellaneous area.
 */
export interface Miscellaneous {
    miscellaneousFields?: MiscellaneousField[];
}

/**
 * 
 * If a program has other metadata not yet supported in the
 * MusicXML format, it can go in the miscellaneous area.
 */
export interface MiscellaneousComplete {
    miscellaneousFields: MiscellaneousField[];
}


/**
 * 
 * Identification contains basic metadata about the score.
 * It includes the information in MuseData headers that
 * may apply at a score-wide, movement-wide, or part-wide
 * level. The creator, rights, source, and relation elements
 * are based on Dublin Core.
 */
export interface Identification {
    miscellaneous: Miscellaneous;
    creators?: Creator[];
    relations?: Relation[];
    rights?: Rights[];
    encoding: Encoding;
    source: Source;
}

/**
 * 
 * Identification contains basic metadata about the score.
 * It includes the information in MuseData headers that
 * may apply at a score-wide, movement-wide, or part-wide
 * level. The creator, rights, source, and relation elements
 * are based on Dublin Core.
 */
export interface IdentificationComplete {
    miscellaneous: Miscellaneous;
    creators: Creator[];
    relations: Relation[];
    rights: Rights[];
    encoding: Encoding;
    source: Source;
}


/**
 * The supports element indicates if the encoding supports
 * a particular MusicXML element. This is recommended for
 * elements like beam, stem, and accidental, where the
 * absence of an element is ambiguous if you do not know
 * if the encoding supports that element. For Version 2.0,
 * the supports element is expanded to allow programs to
 * indicate support for particular attributes or particular
 * values. This lets applications communicate, for example,
 * that all system and/or page breaks are contained in the
 * MusicXML file.
 */
export interface Supports {
    element: string;
    attribute?: string;
    value: string;
    type: string;
}

/**
 * The supports element indicates if the encoding supports
 * a particular MusicXML element. This is recommended for
 * elements like beam, stem, and accidental, where the
 * absence of an element is ambiguous if you do not know
 * if the encoding supports that element. For Version 2.0,
 * the supports element is expanded to allow programs to
 * indicate support for particular attributes or particular
 * values. This lets applications communicate, for example,
 * that all system and/or page breaks are contained in the
 * MusicXML file.
 */
export interface SupportsComplete {
    element: string;
    attribute: string;
    value: string;
    type: string;
}


/**
 * Encoding contains information about who did the digital
 * encoding, when, with what software, and in what aspects.
 */
export interface Encoding {
    encodingDescriptions?: string[];
    encodingDate?: EncodingDate;
    supports?: {[key: string]: Supports};
    encoders?: Encoder[];
    softwares?: string[];
}

/**
 * Encoding contains information about who did the digital
 * encoding, when, with what software, and in what aspects.
 */
export interface EncodingComplete {
    encodingDescriptions: string[];
    encodingDate: EncodingDate;
    supports: {[key: string]: Supports};
    encoders: Encoder[];
    softwares: string[];
}


export enum SeparatorType {
    None = 0,
    Horizontal = 1,
    Diagonal = 2,
    Vertical = 3,
    Adjacent = 4
}

/**
 * The time-separator entity indicates how to display the
 * arrangement between the beats and beat-type values in a
 * time signature. The default value is none. The horizontal,
 * diagonal, and vertical values represent horizontal, diagonal
 * lower-left to upper-right, and vertical lines respectively.
 * For these values, the beats and beat-type values are arranged
 * on either side of the separator line. The none value represents
 * no separator with the beats and beat-type arranged vertically.
 * The adjacent value represents no separator with the beats and
 * beat-type arranged horizontally.
 */
export interface TimeSeparator {
    separator?: SeparatorType;
}

/**
 * The time-separator entity indicates how to display the
 * arrangement between the beats and beat-type values in a
 * time signature. The default value is none. The horizontal,
 * diagonal, and vertical values represent horizontal, diagonal
 * lower-left to upper-right, and vertical lines respectively.
 * For these values, the beats and beat-type values are arranged
 * on either side of the separator line. The none value represents
 * no separator with the beats and beat-type arranged vertically.
 * The adjacent value represents no separator with the beats and
 * beat-type arranged horizontally.
 */
export interface TimeSeparatorComplete {
    separator: SeparatorType;
}


export enum TimeSymbolType {
    DottedNote = 4,
    Cut = 1,
    SingleNumber = 2,
    Note = 3,
    Common = 0,
    Normal = 5
}

/**
 * The time-symbol entity indicates how to display a time
 * signature. The normal value is the usual fractional display,
 * and is the implied symbol type if none is specified. Other
 * options are the common and cut time symbols, as well as a
 * single number with an implied denominator. The note symbol
 * indicates that the beat-type should be represented with
 * the corresponding downstem note rather than a number. The
 * dotted-note symbol indicates that the beat-type should be
 * represented with a dotted downstem note that corresponds to
 * three times the beat-type value, and a numerator that is
 * one third the beats value.
 */
export interface TimeSymbol {
    symbol?: TimeSymbolType;
}

/**
 * The time-symbol entity indicates how to display a time
 * signature. The normal value is the usual fractional display,
 * and is the implied symbol type if none is specified. Other
 * options are the common and cut time symbols, as well as a
 * single number with an implied denominator. The note symbol
 * indicates that the beat-type should be represented with
 * the corresponding downstem note rather than a number. The
 * dotted-note symbol indicates that the beat-type should be
 * represented with a dotted downstem note that corresponds to
 * three times the beat-type value, and a numerator that is
 * one third the beats value.
 */
export interface TimeSymbolComplete {
    symbol: TimeSymbolType;
}


export enum CancelLocation {
    Right = 1,
    BeforeBarline = 2,
    Left = 0
}

/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface Cancel {
    fifths: number;
    location?: CancelLocation;
}

/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface CancelComplete {
    fifths: number;
    location: CancelLocation;
}


/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface Fifths extends String {}

/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface KeyOctave {
    octave: number;
    number_: number;
    cancel?: boolean;
}

/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface KeyOctaveComplete {
    octave: number;
    number_: number;
    cancel: boolean;
}


/**
 * Musical notation duration is commonly represented as
 * fractions. The divisions element indicates how many
 * divisions per quarter note are used to indicate a note's
 * duration. For example, if duration = 1 and divisions = 2,
 * this is an eighth note duration. Duration and divisions
 * are used directly for generating sound output, so they
 * must be chosen to take tuplets into account. Using a
 * divisions element lets us use just one number to
 * represent a duration for each note in the score, while
 * retaining the full power of a fractional representation.
 * For maximum compatibility with Standard MIDI Files, the
 * divisions value should not exceed 16383.
 */
export interface Divisions extends String {}

/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface Key extends PrintStyle, PrintObject {
    cancel?: Cancel;
    keySteps: string[];
    keyOctaves?: KeyOctave[];
    number_?: number;
    fifths: number;
    keyAlters: string[];
    keyAccidentals: string[];
    mode?: string;
}

/**
 * Traditional key signatures are represented by the number
 * of flats and sharps, plus an optional mode for major/
 * minor/mode distinctions. Negative numbers are used for
 * flats and positive numbers for sharps, reflecting the
 * key's placement within the circle of fifths (hence the
 * element name). A cancel element indicates that the old
 * key signature should be cancelled before the new one
 * appears. This will always happen when changing to C major
 * or A minor and need not be specified then. The cancel
 * value matches the fifths value of the cancelled key
 * signature (e.g., a cancel of -2 will provide an explicit
 * cancellation for changing from B flat major to F major).
 * The optional location attribute indicates where a key
 * signature cancellation appears relative to a new key
 * signature: to the left, to the right, or before the barline
 * and to the left. It is left by default. For mid-measure key
 * elements, a cancel location of before-barline should be
 * treated like a cancel location of left.
 * 
 * Non-traditional key signatures can be represented using
 * the Humdrum/Scot concept of a list of altered tones.
 * The key-step and key-alter elements are represented the
 * same way as the step and alter elements are in the pitch
 * element in the note.mod file. The optional key-accidental
 * element is represented the same way as the accidental
 * element in the note.mod file. It is used for disambiguating
 * microtonal accidentals. The different element names
 * indicate the different meaning of altering notes in a scale
 * versus altering a sounding pitch.
 * 
 * Valid mode values include major, minor, dorian, phrygian,
 * lydian, mixolydian, aeolian, ionian, locrian, and none.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the key
 * signature applies to all staves in the part.
 * The optional list of key-octave elements is used to specify
 * in which octave each element of the key signature appears.
 * The content specifies the octave value using the same
 * values as the display-octave element. The number attribute
 * is a positive integer that refers to the key signature
 * element in left-to-right order. If the cancel attribute is
 * set to yes, then this number refers to an element specified
 * by the cancel element. It is no by default.
 * 
 * Key signatures appear at the start of each system unless
 * the print-object attribute has been set to "no".
 */
export interface KeyComplete extends PrintStyleComplete, PrintObjectComplete {
    cancel: Cancel;
    keySteps: string[];
    keyOctaves: KeyOctave[];
    number_: number;
    fifths: number;
    keyAlters: string[];
    keyAccidentals: string[];
    mode: string;
}


/**
 * Time signatures are represented by two elements. The
 * beats element indicates the number of beats, as found in
 * the numerator of a time signature. The beat-type element
 * indicates the beat unit, as found in the denominator of
 * a time signature.
 * 
 * Multiple pairs of beats and beat-type elements are used for
 * composite time signatures with multiple denominators, such
 * as 2/4 + 3/8. A composite such as 3+2/8 requires only one
 * beats/beat-type pair.
 * 
 * The interchangeable element is used to represent the second
 * in a pair of interchangeable dual time signatures, such as
 * the 6/8 in 3/4 (6/8). A separate symbol attribute value is
 * available compared to the time element's symbol attribute,
 * which applies to the first of the dual time signatures.
 * The time-relation element indicates the symbol used to
 * represent the interchangeable aspect of the time signature.
 * Valid values are parentheses, bracket, equals, slash, space,
 * and hyphen.
 * 
 * A senza-misura element explicitly indicates that no time
 * signature is present. The optional element content
 * indicates the symbol to be used, if any, such as an X.
 * The time element's symbol attribute is not used when a
 * senza-misura element is present.
 * 
 * The print-object attribute allows a time signature to be
 * specified but not printed, as is the case for excerpts
 * from the middle of a score. The value is "yes" if
 * not present. The optional number attribute refers to staff
 * numbers within the part, from top to bottom on the system.
 * If absent, the time signature applies to all staves in the
 * part.
 */
export interface Time extends TimeSymbol, TimeSeparator, PrintStyleAlign, PrintObject {
    interchangeables?: Interchangeable[];
    beats: number[];
    beatTypes: number[];
    senzaMisura: boolean;
}

/**
 * Time signatures are represented by two elements. The
 * beats element indicates the number of beats, as found in
 * the numerator of a time signature. The beat-type element
 * indicates the beat unit, as found in the denominator of
 * a time signature.
 * 
 * Multiple pairs of beats and beat-type elements are used for
 * composite time signatures with multiple denominators, such
 * as 2/4 + 3/8. A composite such as 3+2/8 requires only one
 * beats/beat-type pair.
 * 
 * The interchangeable element is used to represent the second
 * in a pair of interchangeable dual time signatures, such as
 * the 6/8 in 3/4 (6/8). A separate symbol attribute value is
 * available compared to the time element's symbol attribute,
 * which applies to the first of the dual time signatures.
 * The time-relation element indicates the symbol used to
 * represent the interchangeable aspect of the time signature.
 * Valid values are parentheses, bracket, equals, slash, space,
 * and hyphen.
 * 
 * A senza-misura element explicitly indicates that no time
 * signature is present. The optional element content
 * indicates the symbol to be used, if any, such as an X.
 * The time element's symbol attribute is not used when a
 * senza-misura element is present.
 * 
 * The print-object attribute allows a time signature to be
 * specified but not printed, as is the case for excerpts
 * from the middle of a score. The value is "yes" if
 * not present. The optional number attribute refers to staff
 * numbers within the part, from top to bottom on the system.
 * If absent, the time signature applies to all staves in the
 * part.
 */
export interface TimeComplete extends TimeSymbolComplete, TimeSeparatorComplete, PrintStyleAlignComplete, PrintObjectComplete {
    interchangeables: Interchangeable[];
    beats: number[];
    beatTypes: number[];
    senzaMisura: boolean;
}


/**
 * Time signatures are represented by two elements. The
 * beats element indicates the number of beats, as found in
 * the numerator of a time signature. The beat-type element
 * indicates the beat unit, as found in the denominator of
 * a time signature.
 * 
 * Multiple pairs of beats and beat-type elements are used for
 * composite time signatures with multiple denominators, such
 * as 2/4 + 3/8. A composite such as 3+2/8 requires only one
 * beats/beat-type pair.
 * 
 * The interchangeable element is used to represent the second
 * in a pair of interchangeable dual time signatures, such as
 * the 6/8 in 3/4 (6/8). A separate symbol attribute value is
 * available compared to the time element's symbol attribute,
 * which applies to the first of the dual time signatures.
 * The time-relation element indicates the symbol used to
 * represent the interchangeable aspect of the time signature.
 * Valid values are parentheses, bracket, equals, slash, space,
 * and hyphen.
 * 
 * A senza-misura element explicitly indicates that no time
 * signature is present. The optional element content
 * indicates the symbol to be used, if any, such as an X.
 * The time element's symbol attribute is not used when a
 * senza-misura element is present.
 * 
 * The print-object attribute allows a time signature to be
 * specified but not printed, as is the case for excerpts
 * from the middle of a score. The value is "yes" if
 * not present. The optional number attribute refers to staff
 * numbers within the part, from top to bottom on the system.
 * If absent, the time signature applies to all staves in the
 * part.
 */
export interface Interchangeable extends TimeSymbol, TimeSeparator {
    beats: number[];
    beatTypes: number[];
    timeRelation?: string;
}

/**
 * Time signatures are represented by two elements. The
 * beats element indicates the number of beats, as found in
 * the numerator of a time signature. The beat-type element
 * indicates the beat unit, as found in the denominator of
 * a time signature.
 * 
 * Multiple pairs of beats and beat-type elements are used for
 * composite time signatures with multiple denominators, such
 * as 2/4 + 3/8. A composite such as 3+2/8 requires only one
 * beats/beat-type pair.
 * 
 * The interchangeable element is used to represent the second
 * in a pair of interchangeable dual time signatures, such as
 * the 6/8 in 3/4 (6/8). A separate symbol attribute value is
 * available compared to the time element's symbol attribute,
 * which applies to the first of the dual time signatures.
 * The time-relation element indicates the symbol used to
 * represent the interchangeable aspect of the time signature.
 * Valid values are parentheses, bracket, equals, slash, space,
 * and hyphen.
 * 
 * A senza-misura element explicitly indicates that no time
 * signature is present. The optional element content
 * indicates the symbol to be used, if any, such as an X.
 * The time element's symbol attribute is not used when a
 * senza-misura element is present.
 * 
 * The print-object attribute allows a time signature to be
 * specified but not printed, as is the case for excerpts
 * from the middle of a score. The value is "yes" if
 * not present. The optional number attribute refers to staff
 * numbers within the part, from top to bottom on the system.
 * If absent, the time signature applies to all staves in the
 * part.
 */
export interface InterchangeableComplete extends TimeSymbolComplete, TimeSeparatorComplete {
    beats: number[];
    beatTypes: number[];
    timeRelation: string;
}


/**
 * Staves are used if there is more than one staff
 * represented in the given part (e.g., 2 staves for
 * typical piano parts). If absent, a value of 1 is assumed.
 * Staves are ordered from top to bottom in a part in
 * numerical order, with staff 1 above staff 2.
 */
export interface Staves extends String {}

export enum PartSymbolType {
    None = 0,
    Line = 2,
    Bracket = 3,
    Square = 4,
    Brace = 1
}

/**
 * The part-symbol element indicates how a symbol for a
 * multi-staff part is indicated in the score. Values include
 * none, brace, line, bracket, and square; brace is the default.
 * The top-staff and bottom-staff elements are used when the
 * brace does not extend across the entire part. For example, in
 * a 3-staff organ part, the top-staff will typically be 1 for
 * the right hand, while the bottom-staff will typically be 2
 * for the left hand. Staff 3 for the pedals is usually outside
 * the brace. By default, the presence of a part-symbol element
 * that does not extend across the entire part also indicates a
 * corresponding change in the common barlines within a part.
 */
export interface PartSymbol extends Position, Color {
    topStaff?: number;
    type: PartSymbolType;
    bottomStaff?: number;
}

/**
 * The part-symbol element indicates how a symbol for a
 * multi-staff part is indicated in the score. Values include
 * none, brace, line, bracket, and square; brace is the default.
 * The top-staff and bottom-staff elements are used when the
 * brace does not extend across the entire part. For example, in
 * a 3-staff organ part, the top-staff will typically be 1 for
 * the right hand, while the bottom-staff will typically be 2
 * for the left hand. Staff 3 for the pedals is usually outside
 * the brace. By default, the presence of a part-symbol element
 * that does not extend across the entire part also indicates a
 * corresponding change in the common barlines within a part.
 */
export interface PartSymbolComplete extends PositionComplete, ColorComplete {
    topStaff: number;
    type: PartSymbolType;
    bottomStaff: number;
}


/**
 * Clefs are represented by the sign, line, and
 * clef-octave-change elements. Sign values include G, F, C,
 * percussion, TAB, jianpu, and none. Line numbers are
 * counted from the bottom of the staff. Standard values are
 * 2 for the G sign (treble clef), 4 for the F sign (bass clef),
 * 3 for the C sign (alto clef) and 5 for TAB (on a 6-line
 * staff). The clef-octave-change element is used for
 * transposing clefs (e.g., a treble clef for tenors would
 * have a clef-octave-change value of -1). The optional
 * number attribute refers to staff numbers within the part,
 * from top to bottom on the system. A value of 1 is
 * assumed if not present.
 * 
 * The jianpu sign indicates that the music that follows
 * should be in jianpu numbered notation, just as the TAB
 * sign indicates that the music that follows should be in
 * tablature notation. Unlike TAB, a jianpu sign does not
 * correspond to a visual clef notation.
 * 
 * Sometimes clefs are added to the staff in non-standard
 * line positions, either to indicate cue passages, or when
 * there are multiple clefs present simultaneously on one
 * staff. In this situation, the additional attribute is set to
 * "yes" and the line value is ignored. The size attribute
 * is used for clefs where the additional attribute is "yes".
 * It is typically used to indicate cue clefs.
 * 
 * Sometimes clefs at the start of a measure need to appear
 * after the barline rather than before, as for cues or for
 * use after a repeated section. The after-barline attribute
 * is set to "yes" in this situation. The attribute is ignored
 * for mid-measure clefs.
 * 
 * Clefs appear at the start of each system unless the
 * print-object attribute has been set to "no" or the
 * additional attribute has been set to "yes".
 */
export interface Line extends String {}

/**
 * Clefs are represented by the sign, line, and
 * clef-octave-change elements. Sign values include G, F, C,
 * percussion, TAB, jianpu, and none. Line numbers are
 * counted from the bottom of the staff. Standard values are
 * 2 for the G sign (treble clef), 4 for the F sign (bass clef),
 * 3 for the C sign (alto clef) and 5 for TAB (on a 6-line
 * staff). The clef-octave-change element is used for
 * transposing clefs (e.g., a treble clef for tenors would
 * have a clef-octave-change value of -1). The optional
 * number attribute refers to staff numbers within the part,
 * from top to bottom on the system. A value of 1 is
 * assumed if not present.
 * 
 * The jianpu sign indicates that the music that follows
 * should be in jianpu numbered notation, just as the TAB
 * sign indicates that the music that follows should be in
 * tablature notation. Unlike TAB, a jianpu sign does not
 * correspond to a visual clef notation.
 * 
 * Sometimes clefs are added to the staff in non-standard
 * line positions, either to indicate cue passages, or when
 * there are multiple clefs present simultaneously on one
 * staff. In this situation, the additional attribute is set to
 * "yes" and the line value is ignored. The size attribute
 * is used for clefs where the additional attribute is "yes".
 * It is typically used to indicate cue clefs.
 * 
 * Sometimes clefs at the start of a measure need to appear
 * after the barline rather than before, as for cues or for
 * use after a repeated section. The after-barline attribute
 * is set to "yes" in this situation. The attribute is ignored
 * for mid-measure clefs.
 * 
 * Clefs appear at the start of each system unless the
 * print-object attribute has been set to "no" or the
 * additional attribute has been set to "yes".
 */
export interface Clef extends PrintStyle, PrintObject {
    clefOctaveChange: string;
    sign: string;
    number_?: number;
    size?: SymbolSize;
    line: number;
    afterBarline?: boolean;
    additional?: boolean;
}

/**
 * Clefs are represented by the sign, line, and
 * clef-octave-change elements. Sign values include G, F, C,
 * percussion, TAB, jianpu, and none. Line numbers are
 * counted from the bottom of the staff. Standard values are
 * 2 for the G sign (treble clef), 4 for the F sign (bass clef),
 * 3 for the C sign (alto clef) and 5 for TAB (on a 6-line
 * staff). The clef-octave-change element is used for
 * transposing clefs (e.g., a treble clef for tenors would
 * have a clef-octave-change value of -1). The optional
 * number attribute refers to staff numbers within the part,
 * from top to bottom on the system. A value of 1 is
 * assumed if not present.
 * 
 * The jianpu sign indicates that the music that follows
 * should be in jianpu numbered notation, just as the TAB
 * sign indicates that the music that follows should be in
 * tablature notation. Unlike TAB, a jianpu sign does not
 * correspond to a visual clef notation.
 * 
 * Sometimes clefs are added to the staff in non-standard
 * line positions, either to indicate cue passages, or when
 * there are multiple clefs present simultaneously on one
 * staff. In this situation, the additional attribute is set to
 * "yes" and the line value is ignored. The size attribute
 * is used for clefs where the additional attribute is "yes".
 * It is typically used to indicate cue clefs.
 * 
 * Sometimes clefs at the start of a measure need to appear
 * after the barline rather than before, as for cues or for
 * use after a repeated section. The after-barline attribute
 * is set to "yes" in this situation. The attribute is ignored
 * for mid-measure clefs.
 * 
 * Clefs appear at the start of each system unless the
 * print-object attribute has been set to "no" or the
 * additional attribute has been set to "yes".
 */
export interface ClefComplete extends PrintStyleComplete, PrintObjectComplete {
    clefOctaveChange: string;
    sign: string;
    number_: number;
    size: SymbolSize;
    line: number;
    afterBarline: boolean;
    additional: boolean;
}


/**
 * The staff-details element is used to indicate different
 * types of staves. The staff-type element can be ossia,
 * cue, editorial, regular, or alternate. An alternate staff
 * indicates one that shares the same musical data as the
 * prior staff, but displayed differently (e.g., treble and
 * bass clef, standard notation and tab). The staff-lines
 * element specifies the number of lines for a non 5-line
 * staff. The staff-tuning and capo elements are used to
 * specify tuning when using tablature notation. The optional
 * number attribute specifies the staff number from top to
 * bottom on the system, as with clef. The optional show-frets
 * attribute indicates whether to show tablature frets as
 * numbers (0, 1, 2) or letters (a, b, c). The default choice
 * is numbers. The print-object attribute is used to indicate
 * when a staff is not printed in a part, usually in large
 * scores where empty parts are omitted. It is yes by default.
 * If print-spacing is yes while print-object is no, the score
 * is printed in cutaway format where vertical space is left
 * for the empty part.
 */
export interface StaffLines extends String {}

/**
 * The tuning-step, tuning-alter, and tuning-octave
 * elements are defined in the common.mod file. Staff
 * lines are numbered from bottom to top.
 */
export interface StaffTuning {
    tuningAlter?: TuningAlter;
    line: string;
    tuningStep: string;
    tuningOctave: TuningOctave;
}

/**
 * The tuning-step, tuning-alter, and tuning-octave
 * elements are defined in the common.mod file. Staff
 * lines are numbered from bottom to top.
 */
export interface StaffTuningComplete {
    tuningAlter: TuningAlter;
    line: string;
    tuningStep: string;
    tuningOctave: TuningOctave;
}


/**
 * The staff-size element indicates how large a staff
 * space is on this staff, expressed as a percentage of
 * the work's default scaling. Values less than 100 make
 * the staff space smaller while values over 100 make the
 * staff space larger. A staff-type of cue, ossia, or
 * editorial implies a staff-size of less than 100, but
 * the exact value is implementation-dependent unless
 * specified here. Staff size affects staff height only,
 * not the relationship of the staff to the left and
 * right margins.
 */
export interface StaffSize extends String {}

export enum ShowFretsType {
    Letters = 1,
    Numbers = 0
}

/**
 * The staff-details element is used to indicate different
 * types of staves. The staff-type element can be ossia,
 * cue, editorial, regular, or alternate. An alternate staff
 * indicates one that shares the same musical data as the
 * prior staff, but displayed differently (e.g., treble and
 * bass clef, standard notation and tab). The staff-lines
 * element specifies the number of lines for a non 5-line
 * staff. The staff-tuning and capo elements are used to
 * specify tuning when using tablature notation. The optional
 * number attribute specifies the staff number from top to
 * bottom on the system, as with clef. The optional show-frets
 * attribute indicates whether to show tablature frets as
 * numbers (0, 1, 2) or letters (a, b, c). The default choice
 * is numbers. The print-object attribute is used to indicate
 * when a staff is not printed in a part, usually in large
 * scores where empty parts are omitted. It is yes by default.
 * If print-spacing is yes while print-object is no, the score
 * is printed in cutaway format where vertical space is left
 * for the empty part.
 */
export interface StaffDetails extends PrintObject, PrintSpacing {
    staffLines?: number;
    staffTunings?: StaffTuning[];
    staffSize?: number;
    capo?: string;
    number_?: number;
    showFets?: ShowFretsType;
    staffType?: string;
}

/**
 * The staff-details element is used to indicate different
 * types of staves. The staff-type element can be ossia,
 * cue, editorial, regular, or alternate. An alternate staff
 * indicates one that shares the same musical data as the
 * prior staff, but displayed differently (e.g., treble and
 * bass clef, standard notation and tab). The staff-lines
 * element specifies the number of lines for a non 5-line
 * staff. The staff-tuning and capo elements are used to
 * specify tuning when using tablature notation. The optional
 * number attribute specifies the staff number from top to
 * bottom on the system, as with clef. The optional show-frets
 * attribute indicates whether to show tablature frets as
 * numbers (0, 1, 2) or letters (a, b, c). The default choice
 * is numbers. The print-object attribute is used to indicate
 * when a staff is not printed in a part, usually in large
 * scores where empty parts are omitted. It is yes by default.
 * If print-spacing is yes while print-object is no, the score
 * is printed in cutaway format where vertical space is left
 * for the empty part.
 */
export interface StaffDetailsComplete extends PrintObjectComplete, PrintSpacingComplete {
    staffLines: number;
    staffTunings: StaffTuning[];
    staffSize: number;
    capo: string;
    number_: number;
    showFets: ShowFretsType;
    staffType: string;
}


/**
 * If the part is being encoded for a transposing instrument
 * in written vs. concert pitch, the transposition must be
 * encoded in the transpose element. The transpose element
 * represents what must be added to the written pitch to get
 * the correct sounding pitch.
 * 
 * The transposition is represented by chromatic steps
 * (required) and three optional elements: diatonic pitch
 * steps, octave changes, and doubling an octave down. The
 * chromatic and octave-change elements are numeric values
 * added to the encoded pitch data to create the sounding
 * pitch. The diatonic element is also numeric and allows
 * for correct spelling of enharmonic transpositions.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the
 * transposition applies to all staves in the part. Per-staff
 * transposition is most often used in parts that represent
 * multiple instruments.
 */
export interface Double {
}

/**
 * If the part is being encoded for a transposing instrument
 * in written vs. concert pitch, the transposition must be
 * encoded in the transpose element. The transpose element
 * represents what must be added to the written pitch to get
 * the correct sounding pitch.
 * 
 * The transposition is represented by chromatic steps
 * (required) and three optional elements: diatonic pitch
 * steps, octave changes, and doubling an octave down. The
 * chromatic and octave-change elements are numeric values
 * added to the encoded pitch data to create the sounding
 * pitch. The diatonic element is also numeric and allows
 * for correct spelling of enharmonic transpositions.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the
 * transposition applies to all staves in the part. Per-staff
 * transposition is most often used in parts that represent
 * multiple instruments.
 */
export interface DoubleComplete {
}


/**
 * If the part is being encoded for a transposing instrument
 * in written vs. concert pitch, the transposition must be
 * encoded in the transpose element. The transpose element
 * represents what must be added to the written pitch to get
 * the correct sounding pitch.
 * 
 * The transposition is represented by chromatic steps
 * (required) and three optional elements: diatonic pitch
 * steps, octave changes, and doubling an octave down. The
 * chromatic and octave-change elements are numeric values
 * added to the encoded pitch data to create the sounding
 * pitch. The diatonic element is also numeric and allows
 * for correct spelling of enharmonic transpositions.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the
 * transposition applies to all staves in the part. Per-staff
 * transposition is most often used in parts that represent
 * multiple instruments.
 */
export interface Transpose {
    number_?: number;
    diatonic?: string;
    octaveChange?: string;
    double_?: Double;
    chromatic: string;
}

/**
 * If the part is being encoded for a transposing instrument
 * in written vs. concert pitch, the transposition must be
 * encoded in the transpose element. The transpose element
 * represents what must be added to the written pitch to get
 * the correct sounding pitch.
 * 
 * The transposition is represented by chromatic steps
 * (required) and three optional elements: diatonic pitch
 * steps, octave changes, and doubling an octave down. The
 * chromatic and octave-change elements are numeric values
 * added to the encoded pitch data to create the sounding
 * pitch. The diatonic element is also numeric and allows
 * for correct spelling of enharmonic transpositions.
 * 
 * The optional number attribute refers to staff numbers,
 * from top to bottom on the system. If absent, the
 * transposition applies to all staves in the part. Per-staff
 * transposition is most often used in parts that represent
 * multiple instruments.
 */
export interface TransposeComplete {
    number_: number;
    diatonic: string;
    octaveChange: string;
    double_: Double;
    chromatic: string;
}


/**
 * Directives are like directions, but can be grouped together
 * with attributes for convenience. This is typically used for
 * tempo markings at the beginning of a piece of music. This
 * element has been deprecated in Version 2.0 in favor of
 * the directive attribute for direction elements. Language
 * names come from ISO 639, with optional country subcodes
 * from ISO 3166.
 */
export interface Directive extends PrintStyle {
    data: string;
}

/**
 * Directives are like directions, but can be grouped together
 * with attributes for convenience. This is typically used for
 * tempo markings at the beginning of a piece of music. This
 * element has been deprecated in Version 2.0 in favor of
 * the directive attribute for direction elements. Language
 * names come from ISO 639, with optional country subcodes
 * from ISO 3166.
 */
export interface DirectiveComplete extends PrintStyleComplete {
    data: string;
}


/**
 * The slash-type and slash-dot elements are optional children
 * of the beat-repeat and slash elements. They have the same
 * values as the type and dot elements, and define what the
 * beat is for the display of repetition marks. If not present,
 * the beat is based on the current time signature.
 */
export interface SlashDot {
}

/**
 * The slash-type and slash-dot elements are optional children
 * of the beat-repeat and slash elements. They have the same
 * values as the type and dot elements, and define what the
 * beat is for the display of repetition marks. If not present,
 * the beat is based on the current time signature.
 */
export interface SlashDotComplete {
}


/**
 * The text of the multiple-rest element indicates the number
 * of measures in the multiple rest. Multiple rests may use
 * the 1-bar / 2-bar / 4-bar rest symbols, or a single shape.
 * The use-symbols attribute indicates which to use; it is no
 * if not specified.
 */
export interface MultipleRest {
    multipleRest?: boolean;
    data: string;
}

/**
 * The text of the multiple-rest element indicates the number
 * of measures in the multiple rest. Multiple rests may use
 * the 1-bar / 2-bar / 4-bar rest symbols, or a single shape.
 * The use-symbols attribute indicates which to use; it is no
 * if not specified.
 */
export interface MultipleRestComplete {
    multipleRest: boolean;
    data: string;
}


/**
 * The measure-repeat and beat-repeat element specify a
 * notation style for repetitions. The actual music being
 * repeated needs to be repeated within the MusicXML file.
 * These elements specify the notation that indicates the
 * repeat.
 * 
 * The measure-repeat element is used for both single and
 * multiple measure repeats. The text of the element indicates
 * the number of measures to be repeated in a single pattern.
 * The slashes attribute specifies the number of slashes to
 * use in the repeat sign. It is 1 if not specified. Both the
 * start and the stop of the measure-repeat must be specified.
 */
export interface MeasureRepeat {
    slashed?: number;
    data?: string;
    type: StartStop;
}

/**
 * The measure-repeat and beat-repeat element specify a
 * notation style for repetitions. The actual music being
 * repeated needs to be repeated within the MusicXML file.
 * These elements specify the notation that indicates the
 * repeat.
 * 
 * The measure-repeat element is used for both single and
 * multiple measure repeats. The text of the element indicates
 * the number of measures to be repeated in a single pattern.
 * The slashes attribute specifies the number of slashes to
 * use in the repeat sign. It is 1 if not specified. Both the
 * start and the stop of the measure-repeat must be specified.
 */
export interface MeasureRepeatComplete {
    slashed: number;
    data: string;
    type: StartStop;
}


/**
 * The measure-repeat and beat-repeat element specify a
 * notation style for repetitions. The actual music being
 * repeated needs to be repeated within the MusicXML file.
 * These elements specify the notation that indicates the
 * repeat.
 * 
 * The beat-repeat element is used to indicate that a single
 * beat (but possibly many notes) is repeated. Both the start
 * and stop of the beat being repeated should be specified.
 * The slashes attribute specifies the number of slashes to
 * use in the symbol. The use-dots attribute indicates whether
 * or not to use dots as well (for instance, with mixed rhythm
 * patterns). By default, the value for slashes is 1 and the
 * value for use-dots is no.
 */
export interface BeatRepeat {
    slashType?: string;
    useDots?: boolean;
    slashDots?: SlashDot[];
    slases?: number;
    type: StartStop;
}

/**
 * The measure-repeat and beat-repeat element specify a
 * notation style for repetitions. The actual music being
 * repeated needs to be repeated within the MusicXML file.
 * These elements specify the notation that indicates the
 * repeat.
 * 
 * The beat-repeat element is used to indicate that a single
 * beat (but possibly many notes) is repeated. Both the start
 * and stop of the beat being repeated should be specified.
 * The slashes attribute specifies the number of slashes to
 * use in the symbol. The use-dots attribute indicates whether
 * or not to use dots as well (for instance, with mixed rhythm
 * patterns). By default, the value for slashes is 1 and the
 * value for use-dots is no.
 */
export interface BeatRepeatComplete {
    slashType: string;
    useDots: boolean;
    slashDots: SlashDot[];
    slases: number;
    type: StartStop;
}


/**
 * The slash element is used to indicate that slash notation
 * is to be used. If the slash is on every beat, use-stems is
 * no (the default). To indicate rhythms but not pitches,
 * use-stems is set to yes. The type attribute indicates
 * whether this is the start or stop of a slash notation
 * style. The use-dots attribute works as for the beat-repeat
 * element, and only has effect if use-stems is no.
 */
export interface Slash {
    slashType?: string;
    useDots?: boolean;
    useStems?: boolean;
    slashDots?: SlashDot[];
    type: StartStop;
}

/**
 * The slash element is used to indicate that slash notation
 * is to be used. If the slash is on every beat, use-stems is
 * no (the default). To indicate rhythms but not pitches,
 * use-stems is set to yes. The type attribute indicates
 * whether this is the start or stop of a slash notation
 * style. The use-dots attribute works as for the beat-repeat
 * element, and only has effect if use-stems is no.
 */
export interface SlashComplete {
    slashType: string;
    useDots: boolean;
    useStems: boolean;
    slashDots: SlashDot[];
    type: StartStop;
}


/**
 * A measure-style indicates a special way to print partial
 * to multiple measures within a part. This includes multiple
 * rests over several measures, repeats of beats, single, or
 * multiple measures, and use of slash notation.
 * 
 * The multiple-rest and measure-repeat symbols indicate the
 * number of measures covered in the element content. The
 * beat-repeat and slash elements can cover partial measures.
 * All but the multiple-rest element use a type attribute to
 * indicate starting and stopping the use of the style. The
 * optional number attribute specifies the staff number from
 * top to bottom on the system, as with clef.
 */
export interface MeasureStyle extends Font, Color {
    measureRepeat?: MeasureRepeat;
    beatRepeat?: BeatRepeat;
    multipleRest?: MultipleRest;
    slash?: Slash;
    number_?: number;
}

/**
 * A measure-style indicates a special way to print partial
 * to multiple measures within a part. This includes multiple
 * rests over several measures, repeats of beats, single, or
 * multiple measures, and use of slash notation.
 * 
 * The multiple-rest and measure-repeat symbols indicate the
 * number of measures covered in the element content. The
 * beat-repeat and slash elements can cover partial measures.
 * All but the multiple-rest element use a type attribute to
 * indicate starting and stopping the use of the style. The
 * optional number attribute specifies the staff number from
 * top to bottom on the system, as with clef.
 */
export interface MeasureStyleComplete extends FontComplete, ColorComplete {
    measureRepeat: MeasureRepeat;
    beatRepeat: BeatRepeat;
    multipleRest: MultipleRest;
    slash: Slash;
    number_: number;
}


/**
 * The attributes element contains musical information that
 * typically changes on measure boundaries. This includes
 * key and time signatures, clefs, transpositions, and staving.
 * When attributes are changed mid-measure, it affects the
 * music in score order, not in MusicXML document order.
 */
export interface Attributes extends Editorial {
    divisions?: number;
    partSymbol?: PartSymbol;
    clef?: Clef;
    measureStyle?: MeasureStyle;
    time?: Time;
    staffDetails?: StaffDetails;
    transpose?: Transpose;
    staves?: number;
    instruments?: string;
    keySignature?: Key;
    directive?: Directive;
}

/**
 * The attributes element contains musical information that
 * typically changes on measure boundaries. This includes
 * key and time signatures, clefs, transpositions, and staving.
 * When attributes are changed mid-measure, it affects the
 * music in score order, not in MusicXML document order.
 */
export interface AttributesComplete extends EditorialComplete {
    divisions: number;
    partSymbol: PartSymbol;
    clef: Clef;
    measureStyle: MeasureStyle;
    time: Time;
    staffDetails: StaffDetails;
    transpose: Transpose;
    staves: number;
    instruments: string;
    keySignature: Key;
    directive: Directive;
}


/**
 * The cue and grace elements indicate the presence of cue and
 * grace notes. The slash attribute for a grace note is yes for
 * slashed eighth notes. The other grace note attributes come
 * from MuseData sound suggestions. The steal-time-previous
 * attribute indicates the percentage of time to steal from the
 * previous note for the grace note. The steal-time-following
 * attribute indicates the percentage of time to steal from the
 * following note for the grace note, as for appoggiaturas. The
 * make-time attribute indicates to make time, not steal time;
 * the units are in real-time divisions for the grace note.
 */
export interface Cue {
}

/**
 * The cue and grace elements indicate the presence of cue and
 * grace notes. The slash attribute for a grace note is yes for
 * slashed eighth notes. The other grace note attributes come
 * from MuseData sound suggestions. The steal-time-previous
 * attribute indicates the percentage of time to steal from the
 * previous note for the grace note. The steal-time-following
 * attribute indicates the percentage of time to steal from the
 * following note for the grace note, as for appoggiaturas. The
 * make-time attribute indicates to make time, not steal time;
 * the units are in real-time divisions for the grace note.
 */
export interface CueComplete {
}


/**
 * The cue and grace elements indicate the presence of cue and
 * grace notes. The slash attribute for a grace note is yes for
 * slashed eighth notes. The other grace note attributes come
 * from MuseData sound suggestions. The steal-time-previous
 * attribute indicates the percentage of time to steal from the
 * previous note for the grace note. The steal-time-following
 * attribute indicates the percentage of time to steal from the
 * following note for the grace note, as for appoggiaturas. The
 * make-time attribute indicates to make time, not steal time;
 * the units are in real-time divisions for the grace note.
 */
export interface Grace {
    makeTime?: string;
    stealTimePrevious?: string;
    slash?: boolean;
    stealTimeFollowing?: string;
}

/**
 * The cue and grace elements indicate the presence of cue and
 * grace notes. The slash attribute for a grace note is yes for
 * slashed eighth notes. The other grace note attributes come
 * from MuseData sound suggestions. The steal-time-previous
 * attribute indicates the percentage of time to steal from the
 * previous note for the grace note. The steal-time-following
 * attribute indicates the percentage of time to steal from the
 * following note for the grace note, as for appoggiaturas. The
 * make-time attribute indicates to make time, not steal time;
 * the units are in real-time divisions for the grace note.
 */
export interface GraceComplete {
    makeTime: string;
    stealTimePrevious: string;
    slash: boolean;
    stealTimeFollowing: string;
}


/**
 * The chord element indicates that this note is an additional
 * chord tone with the preceding note. The duration of this
 * note can be no longer than the preceding note. In MuseData,
 * a missing duration indicates the same length as the previous
 * note, but the MusicXML format requires a duration for chord
 * notes too.
 */
export interface Chord {
}

/**
 * The chord element indicates that this note is an additional
 * chord tone with the preceding note. The duration of this
 * note can be no longer than the preceding note. In MuseData,
 * a missing duration indicates the same length as the previous
 * note, but the MusicXML format requires a duration for chord
 * notes too.
 */
export interface ChordComplete {
}


/**
 * The unpitched element indicates musical elements that are
 * notated on the staff but lack definite pitch, such as
 * unpitched percussion and speaking voice. Like notes, it
 * uses step and octave elements to indicate placement on the
 * staff, following the current clef. If percussion clef is
 * used, the display-step and display-octave elements are
 * interpreted as if in treble clef, with a G in octave 4 on
 * line 2. If not present, the note is placed on the middle
 * line of the staff, generally used for a one-line staff.
 */
export interface Unpitched {
    displayStep?: string;
    displayOctave?: string;
}

/**
 * The unpitched element indicates musical elements that are
 * notated on the staff but lack definite pitch, such as
 * unpitched percussion and speaking voice. Like notes, it
 * uses step and octave elements to indicate placement on the
 * staff, following the current clef. If percussion clef is
 * used, the display-step and display-octave elements are
 * interpreted as if in treble clef, with a G in octave 4 on
 * line 2. If not present, the note is placed on the middle
 * line of the staff, generally used for a one-line staff.
 */
export interface UnpitchedComplete {
    displayStep: string;
    displayOctave: string;
}


export interface Alter extends String {}

export interface Octave extends String {}

/**
 * Pitch is represented as a combination of the step of the
 * diatonic scale, the chromatic alteration, and the octave.
 * The step element uses the English letters A through G.
 * The alter element represents chromatic alteration in
 * number of semitones (e.g., -1 for flat, 1 for sharp).
 * Decimal values like 0.5 (quarter tone sharp) are
 * used for microtones. The octave element is represented
 * by the numbers 0 to 9, where 4 indicates the octave
 * started by middle C.
 */
export interface Pitch {
    alter?: number;
    step?: string;
    octave: number;
}

/**
 * Pitch is represented as a combination of the step of the
 * diatonic scale, the chromatic alteration, and the octave.
 * The step element uses the English letters A through G.
 * The alter element represents chromatic alteration in
 * number of semitones (e.g., -1 for flat, 1 for sharp).
 * Decimal values like 0.5 (quarter tone sharp) are
 * used for microtones. The octave element is represented
 * by the numbers 0 to 9, where 4 indicates the octave
 * started by middle C.
 */
export interface PitchComplete {
    alter: number;
    step: string;
    octave: number;
}


/**
 * The common note elements between cue/grace notes and
 * regular (full) notes: pitch, chord, and rest information,
 * but not duration (cue and grace notes do not have
 * duration encoded here). Unpitched elements are used for
 * unpitched percussion, speaking voice, and other musical
 * elements lacking determinate pitch.
 */
export interface FullNote {
    unpitched?: Unpitched;
    chord?: Chord;
    pitch?: Pitch;
    rest?: Rest;
}

/**
 * The common note elements between cue/grace notes and
 * regular (full) notes: pitch, chord, and rest information,
 * but not duration (cue and grace notes do not have
 * duration encoded here). Unpitched elements are used for
 * unpitched percussion, speaking voice, and other musical
 * elements lacking determinate pitch.
 */
export interface FullNoteComplete {
    unpitched: Unpitched;
    chord: Chord;
    pitch: Pitch;
    rest: Rest;
}


/**
 * The rest element indicates notated rests or silences. Rest
 * elements are usually empty, but placement on the staff can
 * be specified using display-step and display-octave
 * elements. If the measure attribute is set to yes, it
 * indicates this is a complete measure rest.
 */
export interface Rest {
    measure?: boolean;
    displayStep?: string;
    displayOctave?: string;
}

/**
 * The rest element indicates notated rests or silences. Rest
 * elements are usually empty, but placement on the staff can
 * be specified using display-step and display-octave
 * elements. If the measure attribute is set to yes, it
 * indicates this is a complete measure rest.
 */
export interface RestComplete {
    measure: boolean;
    displayStep: string;
    displayOctave: string;
}


/**
 * Duration is a positive number specified in division units.
 * This is the intended duration vs. notated duration (for
 * instance, swing eighths vs. even eighths, or differences
 * in dotted notes in Baroque-era music). Differences in
 * duration specific to an interpretation or performance
 * should use the note element's attack and release
 * attributes.
 * 
 * The tie element indicates that a tie begins or ends with
 * this note. If the tie element applies only particular times
 * through a repeat, the time-only attribute indicates which
 * times to apply it. The tie element indicates sound; the tied
 * element indicates notation.
 */
export interface Duration extends String {}

/**
 * Duration is a positive number specified in division units.
 * This is the intended duration vs. notated duration (for
 * instance, swing eighths vs. even eighths, or differences
 * in dotted notes in Baroque-era music). Differences in
 * duration specific to an interpretation or performance
 * should use the note element's attack and release
 * attributes.
 * 
 * The tie element indicates that a tie begins or ends with
 * this note. If the tie element applies only particular times
 * through a repeat, the time-only attribute indicates which
 * times to apply it. The tie element indicates sound; the tied
 * element indicates notation.
 */
export interface Tie extends TimeOnly {
    type?: StartStop;
}

/**
 * Duration is a positive number specified in division units.
 * This is the intended duration vs. notated duration (for
 * instance, swing eighths vs. even eighths, or differences
 * in dotted notes in Baroque-era music). Differences in
 * duration specific to an interpretation or performance
 * should use the note element's attack and release
 * attributes.
 * 
 * The tie element indicates that a tie begins or ends with
 * this note. If the tie element applies only particular times
 * through a repeat, the time-only attribute indicates which
 * times to apply it. The tie element indicates sound; the tied
 * element indicates notation.
 */
export interface TieComplete extends TimeOnlyComplete {
    type: StartStop;
}


/**
 * If multiple score-instruments are specified on a
 * score-part, there should be an instrument element for
 * each note in the part. The id attribute is an IDREF back
 * to the score-instrument ID.
 */
export interface Instrument {
    id: string;
}

/**
 * If multiple score-instruments are specified on a
 * score-part, there should be an instrument element for
 * each note in the part. The id attribute is an IDREF back
 * to the score-instrument ID.
 */
export interface InstrumentComplete {
    id: string;
}


/**
 * Notes are the most common type of MusicXML data. The
 * MusicXML format keeps the MuseData distinction between
 * elements used for sound information and elements used for
 * notation information (e.g., tie is used for sound, tied for
 * notation). Thus grace notes do not have a duration element.
 * Cue notes have a duration element, as do forward elements,
 * but no tie elements. Having these two types of information
 * available can make interchange considerably easier, as
 * some programs handle one type of information much more
 * readily than the other.
 */
export interface Note extends EditorialVoice, PrintStyle, Printout, TimeOnly, FullNote {
    noteheadText?: NoteheadText;
    timeModification?: TimeModification;
    accidental?: Accidental;
    instrument?: Instrument;
    attack?: number;
    endDynamics?: number;
    lyrics?: Lyric[];
    dots?: Dot[];
    notations?: Notations[];
    stem?: Stem;
    noteType?: Type;
    pizzicato: boolean;
    cue?: Cue;
    duration?: number;
    ties?: Tie[];
    dynamics?: number;
    play?: Play;
    staff?: Staff;
    grace?: Grace;
    notehead?: Notehead;
    release?: number;
    beams?: Beam[];
}

/**
 * Notes are the most common type of MusicXML data. The
 * MusicXML format keeps the MuseData distinction between
 * elements used for sound information and elements used for
 * notation information (e.g., tie is used for sound, tied for
 * notation). Thus grace notes do not have a duration element.
 * Cue notes have a duration element, as do forward elements,
 * but no tie elements. Having these two types of information
 * available can make interchange considerably easier, as
 * some programs handle one type of information much more
 * readily than the other.
 */
export interface NoteComplete extends EditorialVoiceComplete, PrintStyleComplete, PrintoutComplete, TimeOnlyComplete, FullNoteComplete {
    noteheadText: NoteheadText;
    timeModification: TimeModification;
    accidental: Accidental;
    instrument: Instrument;
    attack: number;
    endDynamics: number;
    lyrics: Lyric[];
    dots: Dot[];
    notations: Notations[];
    stem: Stem;
    noteType: Type;
    pizzicato: boolean;
    cue: Cue;
    duration: number;
    ties: Tie[];
    dynamics: number;
    play: Play;
    staff: Staff;
    grace: Grace;
    notehead: Notehead;
    release: number;
    beams: Beam[];
}


export enum Count {
    Quarter = 4,
    Breve = 9990,
    Long = 9991,
    _1024th = 1024,
    _32nd = 32,
    _16th = 16,
    Eighth = 8,
    Maxima = 9992,
    _512th = 512,
    _64th = 64,
    _256th = 256,
    _128th = 128,
    Half = 2,
    Whole = 1
}

/**
 * Type indicates the graphic note type, Valid values (from
 * shortest to longest) are 1024th, 512th, 256th, 128th,
 * 64th, 32nd, 16th, eighth, quarter, half, whole, breve,
 * long, and maxima. The size attribute indicates full, cue,
 * or large size, with full the default for regular notes and
 * cue the default for cue and grace notes.
 */
export interface Type {
    duration: Count;
    size?: SymbolSize;
}

/**
 * Type indicates the graphic note type, Valid values (from
 * shortest to longest) are 1024th, 512th, 256th, 128th,
 * 64th, 32nd, 16th, eighth, quarter, half, whole, breve,
 * long, and maxima. The size attribute indicates full, cue,
 * or large size, with full the default for regular notes and
 * cue the default for cue and grace notes.
 */
export interface TypeComplete {
    duration: Count;
    size: SymbolSize;
}


/**
 * One dot element is used for each dot of prolongation.
 * The placement element is used to specify whether the
 * dot should appear above or below the staff line. It is
 * ignored for notes that appear on a staff space.
 */
export interface Dot extends PrintStyle, Placement {
}

/**
 * One dot element is used for each dot of prolongation.
 * The placement element is used to specify whether the
 * dot should appear above or below the staff line. It is
 * ignored for notes that appear on a staff space.
 */
export interface DotComplete extends PrintStyleComplete, PlacementComplete {
}


export enum MxmlAccidental {
    NaturalFlat = 7,
    SharpUp = 13,
    ThreeQuartersFlat = 10,
    ThreeQuartersSharp = 11,
    QuarterFlat = 8,
    Flat = 2,
    TripleSharp = 18,
    Flat1 = 27,
    Flat2 = 28,
    Flat3 = 29,
    Flat4 = 291,
    TripleFlat = 19,
    Flat5 = 30,
    Sharp = 0,
    QuarterSharp = 9,
    SlashFlat = 21,
    FlatDown = 16,
    NaturalDown = 14,
    SlashQuarterSharp = 19,
    SharpSharp = 4,
    Sharp1 = 23,
    FlatUp = 17,
    Sharp2 = 24,
    Sharp3 = 25,
    DoubleSharp = 3,
    Sharp4 = 251,
    Sharp5 = 26,
    Sori = 31,
    DoubleSlashFlat = 22,
    SharpDown = 12,
    Koron = 32,
    NaturalUp = 15,
    SlashSharp = 20,
    NaturalSharp = 6,
    FlatFlat = 5,
    Natural = 1,
    DoubleFlat = 33
}

/**
 * Actual notated accidentals. Valid values include: sharp,
 * natural, flat, double-sharp, sharp-sharp, flat-flat,
 * natural-sharp, natural-flat, quarter-flat, quarter-sharp,
 * three-quarters-flat, three-quarters-sharp, sharp-down,
 * sharp-up, natural-down, natural-up, flat-down, flat-up,
 * triple-sharp, triple-flat, slash-quarter-sharp,
 * slash-sharp, slash-flat, double-slash-flat, sharp-1,
 * sharp-2, sharp-3, sharp-5, flat-1, flat-2, flat-3,
 * flat-4, sori, and koron.
 * 
 * The quarter- and three-quarters- accidentals are
 * Tartini-style quarter-tone accidentals. The -down and -up
 * accidentals are quarter-tone accidentals that include
 * arrows pointing down or up. The slash- accidentals
 * are used in Turkish classical music. The numbered
 * sharp and flat accidentals are superscripted versions
 * of the accidental signs, used in Turkish folk music.
 * The sori and koron accidentals are microtonal sharp and
 * flat accidentals used in Iranian and Persian music.
 * 
 * Editorial and cautionary indications are indicated
 * by attributes. Values for these attributes are "no" if not
 * present. Specific graphic display such as parentheses,
 * brackets, and size are controlled by the level-display
 * entity defined in the common.mod file.
 */
export interface Accidental extends LevelDisplay, PrintStyle {
    cautionary?: boolean;
    accidental: MxmlAccidental;
    editorial?: boolean;
}

/**
 * Actual notated accidentals. Valid values include: sharp,
 * natural, flat, double-sharp, sharp-sharp, flat-flat,
 * natural-sharp, natural-flat, quarter-flat, quarter-sharp,
 * three-quarters-flat, three-quarters-sharp, sharp-down,
 * sharp-up, natural-down, natural-up, flat-down, flat-up,
 * triple-sharp, triple-flat, slash-quarter-sharp,
 * slash-sharp, slash-flat, double-slash-flat, sharp-1,
 * sharp-2, sharp-3, sharp-5, flat-1, flat-2, flat-3,
 * flat-4, sori, and koron.
 * 
 * The quarter- and three-quarters- accidentals are
 * Tartini-style quarter-tone accidentals. The -down and -up
 * accidentals are quarter-tone accidentals that include
 * arrows pointing down or up. The slash- accidentals
 * are used in Turkish classical music. The numbered
 * sharp and flat accidentals are superscripted versions
 * of the accidental signs, used in Turkish folk music.
 * The sori and koron accidentals are microtonal sharp and
 * flat accidentals used in Iranian and Persian music.
 * 
 * Editorial and cautionary indications are indicated
 * by attributes. Values for these attributes are "no" if not
 * present. Specific graphic display such as parentheses,
 * brackets, and size are controlled by the level-display
 * entity defined in the common.mod file.
 */
export interface AccidentalComplete extends LevelDisplayComplete, PrintStyleComplete {
    cautionary: boolean;
    accidental: MxmlAccidental;
    editorial: boolean;
}


/**
 * Time modification indicates tuplets, double-note tremolos,
 * and other durational changes. A time-modification element
 * shows how the cumulative, sounding effect of tuplets and
 * double-note tremolos compare to the written note type
 * represented by the type and dot elements. The child elements
 * are defined in the common.mod file. Nested tuplets and other
 * notations that use more detailed information need both the
 * time-modification and tuplet elements to be represented
 * accurately.
 */
export interface TimeModification {
    actualNotes: ActualNotes;
    normalType?: string;
    normalNotes: NormalNotes;
    normalDots?: NormalDot[];
}

/**
 * Time modification indicates tuplets, double-note tremolos,
 * and other durational changes. A time-modification element
 * shows how the cumulative, sounding effect of tuplets and
 * double-note tremolos compare to the written note type
 * represented by the type and dot elements. The child elements
 * are defined in the common.mod file. Nested tuplets and other
 * notations that use more detailed information need both the
 * time-modification and tuplet elements to be represented
 * accurately.
 */
export interface TimeModificationComplete {
    actualNotes: ActualNotes;
    normalType: string;
    normalNotes: NormalNotes;
    normalDots: NormalDot[];
}


export enum StemType {
    None = 2,
    Double = 3,
    Down = 0,
    Up = 1
}

/**
 * Stems can be down, up, none, or double. For down and up
 * stems, the position attributes can be used to specify
 * stem length. The relative values specify the end of the
 * stem relative to the program default. Default values
 * specify an absolute end stem position. Negative values of
 * relative-y that would flip a stem instead of shortening
 * it are ignored. A stem element associated with a rest
 * refers to a stemlet.
 */
export interface Stem extends Position, Color {
    type: StemType;
}

/**
 * Stems can be down, up, none, or double. For down and up
 * stems, the position attributes can be used to specify
 * stem length. The relative values specify the end of the
 * stem relative to the program default. Default values
 * specify an absolute end stem position. Negative values of
 * relative-y that would flip a stem instead of shortening
 * it are ignored. A stem element associated with a rest
 * refers to a stemlet.
 */
export interface StemComplete extends PositionComplete, ColorComplete {
    type: StemType;
}


export enum NoteheadType {
    InvertedTriangle = 7,
    CircleDot = 14,
    ArrowUp = 9,
    Do = 18,
    Mi = 20,
    Cross = 4,
    Slash = 0,
    Fa = 21,
    Triangle = 1,
    FaUp = 22,
    So = 23,
    LeftTriangle = 15,
    BackSlashed = 11,
    None = 17,
    La = 24,
    Slashed = 10,
    Normal = 12,
    Cluster = 13,
    Ti = 25,
    Re = 19,
    Nrectangle = 16,
    Square = 3,
    ArrowDown = 8,
    X = 5,
    Diamond = 2,
    CircleX = 6
}

/**
 * The notehead element indicates shapes other than the open
 * and closed ovals associated with note durations. The element
 * value can be slash, triangle, diamond, square, cross, x,
 * circle-x, inverted triangle, arrow down, arrow up, slashed,
 * back slashed, normal, cluster, circle dot, left triangle,
 * rectangle, or none. For shape note music, the element values
 * do, re, mi, fa, fa up, so, la, and ti are also used,
 * corresponding to Aikin's 7-shape system. The fa up shape is
 * typically used with upstems; the fa shape is typically used
 * with downstems or no stems.
 * 
 * The arrow shapes differ from triangle and inverted triangle
 * by being centered on the stem. Slashed and back slashed
 * notes include both the normal notehead and a slash. The
 * triangle shape has the tip of the triangle pointing up;
 * the inverted triangle shape has the tip of the triangle
 * pointing down. The left triangle shape is a right triangle
 * with the hypotenuse facing up and to the left.
 * 
 * For the enclosed shapes, the default is to be hollow for
 * half notes and longer, and filled otherwise. The filled
 * attribute can be set to change this if needed.
 * 
 * If the parentheses attribute is set to yes, the notehead
 * is parenthesized. It is no by default.
 * 
 * The notehead-text element indicates text that is displayed
 * inside a notehead, as is done in some educational music.
 * It is not needed for the numbers used in tablature or jianpu
 * notation. The presence of a TAB or jianpu clefs is sufficient
 * to indicate that numbers are used. The display-text and
 * accidental-text elements allow display of fully formatted
 * text and accidentals.
 */
export interface Notehead extends Font, Color {
    type: NoteheadType;
    filled?: boolean;
    parentheses?: boolean;
}

/**
 * The notehead element indicates shapes other than the open
 * and closed ovals associated with note durations. The element
 * value can be slash, triangle, diamond, square, cross, x,
 * circle-x, inverted triangle, arrow down, arrow up, slashed,
 * back slashed, normal, cluster, circle dot, left triangle,
 * rectangle, or none. For shape note music, the element values
 * do, re, mi, fa, fa up, so, la, and ti are also used,
 * corresponding to Aikin's 7-shape system. The fa up shape is
 * typically used with upstems; the fa shape is typically used
 * with downstems or no stems.
 * 
 * The arrow shapes differ from triangle and inverted triangle
 * by being centered on the stem. Slashed and back slashed
 * notes include both the normal notehead and a slash. The
 * triangle shape has the tip of the triangle pointing up;
 * the inverted triangle shape has the tip of the triangle
 * pointing down. The left triangle shape is a right triangle
 * with the hypotenuse facing up and to the left.
 * 
 * For the enclosed shapes, the default is to be hollow for
 * half notes and longer, and filled otherwise. The filled
 * attribute can be set to change this if needed.
 * 
 * If the parentheses attribute is set to yes, the notehead
 * is parenthesized. It is no by default.
 * 
 * The notehead-text element indicates text that is displayed
 * inside a notehead, as is done in some educational music.
 * It is not needed for the numbers used in tablature or jianpu
 * notation. The presence of a TAB or jianpu clefs is sufficient
 * to indicate that numbers are used. The display-text and
 * accidental-text elements allow display of fully formatted
 * text and accidentals.
 */
export interface NoteheadComplete extends FontComplete, ColorComplete {
    type: NoteheadType;
    filled: boolean;
    parentheses: boolean;
}


/**
 * The notehead element indicates shapes other than the open
 * and closed ovals associated with note durations. The element
 * value can be slash, triangle, diamond, square, cross, x,
 * circle-x, inverted triangle, arrow down, arrow up, slashed,
 * back slashed, normal, cluster, circle dot, left triangle,
 * rectangle, or none. For shape note music, the element values
 * do, re, mi, fa, fa up, so, la, and ti are also used,
 * corresponding to Aikin's 7-shape system. The fa up shape is
 * typically used with upstems; the fa shape is typically used
 * with downstems or no stems.
 * 
 * The arrow shapes differ from triangle and inverted triangle
 * by being centered on the stem. Slashed and back slashed
 * notes include both the normal notehead and a slash. The
 * triangle shape has the tip of the triangle pointing up;
 * the inverted triangle shape has the tip of the triangle
 * pointing down. The left triangle shape is a right triangle
 * with the hypotenuse facing up and to the left.
 * 
 * For the enclosed shapes, the default is to be hollow for
 * half notes and longer, and filled otherwise. The filled
 * attribute can be set to change this if needed.
 * 
 * If the parentheses attribute is set to yes, the notehead
 * is parenthesized. It is no by default.
 * 
 * The notehead-text element indicates text that is displayed
 * inside a notehead, as is done in some educational music.
 * It is not needed for the numbers used in tablature or jianpu
 * notation. The presence of a TAB or jianpu clefs is sufficient
 * to indicate that numbers are used. The display-text and
 * accidental-text elements allow display of fully formatted
 * text and accidentals.
 */
export interface NoteheadText {
    text: TextArray;
}

/**
 * The notehead element indicates shapes other than the open
 * and closed ovals associated with note durations. The element
 * value can be slash, triangle, diamond, square, cross, x,
 * circle-x, inverted triangle, arrow down, arrow up, slashed,
 * back slashed, normal, cluster, circle dot, left triangle,
 * rectangle, or none. For shape note music, the element values
 * do, re, mi, fa, fa up, so, la, and ti are also used,
 * corresponding to Aikin's 7-shape system. The fa up shape is
 * typically used with upstems; the fa shape is typically used
 * with downstems or no stems.
 * 
 * The arrow shapes differ from triangle and inverted triangle
 * by being centered on the stem. Slashed and back slashed
 * notes include both the normal notehead and a slash. The
 * triangle shape has the tip of the triangle pointing up;
 * the inverted triangle shape has the tip of the triangle
 * pointing down. The left triangle shape is a right triangle
 * with the hypotenuse facing up and to the left.
 * 
 * For the enclosed shapes, the default is to be hollow for
 * half notes and longer, and filled otherwise. The filled
 * attribute can be set to change this if needed.
 * 
 * If the parentheses attribute is set to yes, the notehead
 * is parenthesized. It is no by default.
 * 
 * The notehead-text element indicates text that is displayed
 * inside a notehead, as is done in some educational music.
 * It is not needed for the numbers used in tablature or jianpu
 * notation. The presence of a TAB or jianpu clefs is sufficient
 * to indicate that numbers are used. The display-text and
 * accidental-text elements allow display of fully formatted
 * text and accidentals.
 */
export interface NoteheadTextComplete {
    text: TextArray;
}


export enum BeamType {
    BackwardHook = 4,
    Begin = 0,
    ForwardHook = 3,
    Continue = 1,
    End = 2
}

export enum AccelRitNone {
    Accel = 0,
    None = 2,
    Rit = 1
}

/**
 * Beam types include begin, continue, end, forward hook, and
 * backward hook. Up to eight concurrent beams are available to
 * cover up to 1024th notes, using an enumerated type defined
 * in the common.mod file. Each beam in a note is represented
 * with a separate beam element, starting with the eighth note
 * beam using a number attribute of 1.
 * 
 * Note that the beam number does not distinguish sets of
 * beams that overlap, as it does for slur and other elements.
 * Beaming groups are distinguished by being in different
 * voices and/or the presence or absence of grace and cue
 * elements.
 * 
 * Beams that have a begin value can also have a fan attribute to
 * indicate accelerandos and ritardandos using fanned beams. The
 * fan attribute may also be used with a continue value if the
 * fanning direction changes on that note. The value is "none" if not specified.
 * 
 * The repeater attribute has been deprecated in MusicXML 3.0.
 * Formerly used for tremolos, it needs to be specified with a
 * "yes" value for each beam using it.
 */
export interface Beam {
    repeater?: boolean;
    number_: number;
    type: BeamType;
    fan?: AccelRitNone;
}

/**
 * Beam types include begin, continue, end, forward hook, and
 * backward hook. Up to eight concurrent beams are available to
 * cover up to 1024th notes, using an enumerated type defined
 * in the common.mod file. Each beam in a note is represented
 * with a separate beam element, starting with the eighth note
 * beam using a number attribute of 1.
 * 
 * Note that the beam number does not distinguish sets of
 * beams that overlap, as it does for slur and other elements.
 * Beaming groups are distinguished by being in different
 * voices and/or the presence or absence of grace and cue
 * elements.
 * 
 * Beams that have a begin value can also have a fan attribute to
 * indicate accelerandos and ritardandos using fanned beams. The
 * fan attribute may also be used with a continue value if the
 * fanning direction changes on that note. The value is "none" if not specified.
 * 
 * The repeater attribute has been deprecated in MusicXML 3.0.
 * Formerly used for tremolos, it needs to be specified with a
 * "yes" value for each beam using it.
 */
export interface BeamComplete {
    repeater: boolean;
    number_: number;
    type: BeamType;
    fan: AccelRitNone;
}


/**
 * Notations are musical notations, not XML notations. Multiple
 * notations are allowed in order to represent multiple editorial
 * levels. The print-object attribute, added in Version 3.0,
 * allows notations to represent details of performance technique,
 * such as fingerings, without having them appear in the score.
 */
export interface Notations extends Editorial, PrintObject {
    slurs?: Slur[];
    articulations?: Articulations[];
    slides?: Slide[];
    technicals?: Technical[];
    tieds?: Tied[];
    tuplets?: Tuplet[];
    glissandos?: Glissando[];
    dynamics?: Dynamics[];
    fermatas?: Fermata[];
    accidentalMarks?: AccidentalMark[];
    ornaments?: Ornaments[];
    arpeggiates?: Arpeggiate[];
    nonArpeggiates?: NonArpeggiate[];
    otherNotations?: OtherNotation[];
}

/**
 * Notations are musical notations, not XML notations. Multiple
 * notations are allowed in order to represent multiple editorial
 * levels. The print-object attribute, added in Version 3.0,
 * allows notations to represent details of performance technique,
 * such as fingerings, without having them appear in the score.
 */
export interface NotationsComplete extends EditorialComplete, PrintObjectComplete {
    slurs: Slur[];
    articulations: Articulations[];
    slides: Slide[];
    technicals: Technical[];
    tieds: Tied[];
    tuplets: Tuplet[];
    glissandos: Glissando[];
    dynamics: Dynamics[];
    fermatas: Fermata[];
    accidentalMarks: AccidentalMark[];
    ornaments: Ornaments[];
    arpeggiates: Arpeggiate[];
    nonArpeggiates: NonArpeggiate[];
    otherNotations: OtherNotation[];
}


/**
 * The tied element represents the notated tie. The tie element
 * represents the tie sound.
 * 
 * The number attribute is rarely needed to disambiguate ties,
 * since note pitches will usually suffice. The attribute is
 * implied rather than defaulting to 1 as with most elements.
 * It is available for use in more complex tied notation
 * situations.
 */
export interface Tied extends LineType, DashedFormatting, Position, Placement, Orientation, Bezier, Color {
    number_?: number;
    type: StartStopContinue;
}

/**
 * The tied element represents the notated tie. The tie element
 * represents the tie sound.
 * 
 * The number attribute is rarely needed to disambiguate ties,
 * since note pitches will usually suffice. The attribute is
 * implied rather than defaulting to 1 as with most elements.
 * It is available for use in more complex tied notation
 * situations.
 */
export interface TiedComplete extends LineTypeComplete, DashedFormattingComplete, PositionComplete, PlacementComplete, OrientationComplete, BezierComplete, ColorComplete {
    number_: number;
    type: StartStopContinue;
}


/**
 * Slur elements are empty. Most slurs are represented with
 * two elements: one with a start type, and one with a stop
 * type. Slurs can add more elements using a continue type.
 * This is typically used to specify the formatting of cross-
 * system slurs, or to specify the shape of very complex slurs.
 */
export interface Slur extends LineType, DashedFormatting, Position, Placement, Orientation, Bezier, Color {
    number_?: number;
    type: StartStopContinue;
}

/**
 * Slur elements are empty. Most slurs are represented with
 * two elements: one with a start type, and one with a stop
 * type. Slurs can add more elements using a continue type.
 * This is typically used to specify the formatting of cross-
 * system slurs, or to specify the shape of very complex slurs.
 */
export interface SlurComplete extends LineTypeComplete, DashedFormattingComplete, PositionComplete, PlacementComplete, OrientationComplete, BezierComplete, ColorComplete {
    number_: number;
    type: StartStopContinue;
}


export enum ActualBothNone {
    None = 2,
    Both = 1,
    Actual = 0
}

/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface Tuplet extends LineShape, Position, Placement {
    bracket?: boolean;
    number_: number;
    showNumber?: ActualBothNone;
    tupletNormal?: TupletNormal;
    type: StartStop;
    showType?: ActualBothNone;
    tupletActual?: TupletActual;
}

/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletComplete extends LineShapeComplete, PositionComplete, PlacementComplete {
    bracket: boolean;
    number_: number;
    showNumber: ActualBothNone;
    tupletNormal: TupletNormal;
    type: StartStop;
    showType: ActualBothNone;
    tupletActual: TupletActual;
}


/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletActual {
    tupletNumber?: TupletNumber;
    tupletDots?: TupletDot[];
    tupletType?: TupletType;
}

/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletActualComplete {
    tupletNumber: TupletNumber;
    tupletDots: TupletDot[];
    tupletType: TupletType;
}


/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletNormal {
    tupletNumber?: TupletNumber;
    tupletDots?: TupletDot[];
    tupletType?: TupletType;
}

/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletNormalComplete {
    tupletNumber: TupletNumber;
    tupletDots: TupletDot[];
    tupletType: TupletType;
}


/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletNumber extends Font, Color {
    text: string;
}

/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletNumberComplete extends FontComplete, ColorComplete {
    text: string;
}


/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletType extends Font, Color {
    text: string;
}

/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletTypeComplete extends FontComplete, ColorComplete {
    text: string;
}


/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletDot extends Font, Color {
}

/**
 * A tuplet element is present when a tuplet is to be displayed
 * graphically, in addition to the sound data provided by the
 * time-modification elements. The number attribute is used to
 * distinguish nested tuplets. The bracket attribute is used
 * to indicate the presence of a bracket. If unspecified, the
 * results are implementation-dependent. The line-shape
 * attribute is used to specify whether the bracket is straight
 * or in the older curved or slurred style. It is straight by
 * default.
 * 
 * Whereas a time-modification element shows how the cumulative,
 * sounding effect of tuplets and double-note tremolos compare to
 * the written note type, the tuplet element describes how this
 * is displayed. The tuplet element also provides more detailed
 * representation information than the time-modification element,
 * and is needed to represent nested tuplets and other complex
 * tuplets accurately. The tuplet-actual and tuplet-normal
 * elements provide optional full control over tuplet
 * specifications. Each allows the number and note type
 * (including dots) describing a single tuplet. If any of
 * these elements are absent, their values are based on the
 * time-modification element.
 * 
 * The show-number attribute is used to display either the
 * number of actual notes, the number of both actual and
 * normal notes, or neither. It is actual by default. The
 * show-type attribute is used to display either the actual
 * type, both the actual and normal types, or neither. It is
 * none by default.
 */
export interface TupletDotComplete extends FontComplete, ColorComplete {
}


/**
 * Glissando and slide elements both indicate rapidly moving
 * from one pitch to the other so that individual notes are not
 * discerned. The distinction is similar to that between NIFF's
 * glissando and portamento elements. A glissando sounds the
 * half notes in between the slide and defaults to a wavy line.
 * A slide is continuous between two notes and defaults to a
 * solid line. The optional text for a glissando or slide is
 * printed alongside the line.
 */
export interface Glissando extends LineType, DashedFormatting, PrintStyle {
    text?: string;
    type: StartStop;
    normal?: number;
}

/**
 * Glissando and slide elements both indicate rapidly moving
 * from one pitch to the other so that individual notes are not
 * discerned. The distinction is similar to that between NIFF's
 * glissando and portamento elements. A glissando sounds the
 * half notes in between the slide and defaults to a wavy line.
 * A slide is continuous between two notes and defaults to a
 * solid line. The optional text for a glissando or slide is
 * printed alongside the line.
 */
export interface GlissandoComplete extends LineTypeComplete, DashedFormattingComplete, PrintStyleComplete {
    text: string;
    type: StartStop;
    normal: number;
}


/**
 * Glissando and slide elements both indicate rapidly moving
 * from one pitch to the other so that individual notes are not
 * discerned. The distinction is similar to that between NIFF's
 * glissando and portamento elements. A glissando sounds the
 * half notes in between the slide and defaults to a wavy line.
 * A slide is continuous between two notes and defaults to a
 * solid line. The optional text for a glissando or slide is
 * printed alongside the line.
 */
export interface Slide extends LineType, DashedFormatting, PrintStyle, BendSound {
    text?: string;
    type: StartStop;
    normal?: number;
}

/**
 * Glissando and slide elements both indicate rapidly moving
 * from one pitch to the other so that individual notes are not
 * discerned. The distinction is similar to that between NIFF's
 * glissando and portamento elements. A glissando sounds the
 * half notes in between the slide and defaults to a wavy line.
 * A slide is continuous between two notes and defaults to a
 * solid line. The optional text for a glissando or slide is
 * printed alongside the line.
 */
export interface SlideComplete extends LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, BendSoundComplete {
    text: string;
    type: StartStop;
    normal: number;
}


/**
 * The other-notation element is used to define any notations
 * not yet in the MusicXML format. This allows extended
 * representation, though without application interoperability.
 * It handles notations where more specific extension elements
 * such as other-dynamics and other-technical are not
 * appropriate.
 */
export interface OtherNotation extends PrintObject, PrintStyle, Placement {
    type: StartStopSingle;
    data?: string;
}

/**
 * The other-notation element is used to define any notations
 * not yet in the MusicXML format. This allows extended
 * representation, though without application interoperability.
 * It handles notations where more specific extension elements
 * such as other-dynamics and other-technical are not
 * appropriate.
 */
export interface OtherNotationComplete extends PrintObjectComplete, PrintStyleComplete, PlacementComplete {
    type: StartStopSingle;
    data: string;
}


/**
 * The other-direction element is used to define any direction
 * symbols not yet in the current version of the MusicXML
 * format. This allows extended representation, though without
 * application interoperability.
 */
export interface OtherDirection extends PrintObject, PrintStyleAlign {
    data: string;
}

/**
 * The other-direction element is used to define any direction
 * symbols not yet in the current version of the MusicXML
 * format. This allows extended representation, though without
 * application interoperability.
 */
export interface OtherDirectionComplete extends PrintObjectComplete, PrintStyleAlignComplete {
    data: string;
}


/**
 * Ornaments can be any of several types, followed optionally
 * by accidentals. The accidental-mark element's content is
 * represented the same as an accidental element, but with a
 * different name to reflect the different musical meaning.
 */
export interface Ornaments extends PrintStyle, Placement, TrillSound {
    delayedInvertedTurn?: DelayedInvertedTurn;
    shake?: Shake;
    turn?: Turn;
    invertedTurn?: InvertedTurn;
    otherOrnament?: OtherOrnament;
    delayedTurn?: DelayedTurn;
    verticalTurn?: VerticalTurn;
    wavyLine?: WavyLine;
    tremolo?: Tremolo;
    accidentalMarks?: AccidentalMark[];
    trillMark?: TrillMark;
    mordent?: Mordent;
    invertedMordent?: InvertedMordent;
    schleifer?: Schleifer;
}

/**
 * Ornaments can be any of several types, followed optionally
 * by accidentals. The accidental-mark element's content is
 * represented the same as an accidental element, but with a
 * different name to reflect the different musical meaning.
 */
export interface OrnamentsComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
    delayedInvertedTurn: DelayedInvertedTurn;
    shake: Shake;
    turn: Turn;
    invertedTurn: InvertedTurn;
    otherOrnament: OtherOrnament;
    delayedTurn: DelayedTurn;
    verticalTurn: VerticalTurn;
    wavyLine: WavyLine;
    tremolo: Tremolo;
    accidentalMarks: AccidentalMark[];
    trillMark: TrillMark;
    mordent: Mordent;
    invertedMordent: InvertedMordent;
    schleifer: Schleifer;
}


export interface TrillMark extends PrintStyle, Placement, TrillSound {
}

export interface TrillMarkComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
}


/**
 * the turn and delayed-turn elements are the normal turn
 * shape which goes up then down. the inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. the delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. the vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * if the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface Turn extends PrintStyle, Placement, TrillSound {
    slash?: boolean;
}

/**
 * the turn and delayed-turn elements are the normal turn
 * shape which goes up then down. the inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. the delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. the vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * if the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface TurnComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
    slash: boolean;
}


/**
 * The turn and delayed-turn elements are the normal turn
 * shape which goes up then down. The inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. The delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. The vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * If the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface DelayedTurn extends PrintStyle, Placement, TrillSound {
    slash?: boolean;
}

/**
 * The turn and delayed-turn elements are the normal turn
 * shape which goes up then down. The inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. The delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. The vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * If the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface DelayedTurnComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
    slash: boolean;
}


/**
 * The turn and delayed-turn elements are the normal turn
 * shape which goes up then down. The inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. The delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. The vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * If the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface InvertedTurn extends PrintStyle, Placement, TrillSound {
    slash?: boolean;
}

/**
 * The turn and delayed-turn elements are the normal turn
 * shape which goes up then down. The inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. The delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. The vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * If the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface InvertedTurnComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
    slash: boolean;
}


/**
 * The turn and delayed-turn elements are the normal turn
 * shape which goes up then down. The inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. The delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. The vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * If the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface DelayedInvertedTurn extends PrintStyle, Placement, TrillSound {
    slash?: boolean;
}

/**
 * The turn and delayed-turn elements are the normal turn
 * shape which goes up then down. The inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. The delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. The vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * If the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface DelayedInvertedTurnComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
    slash: boolean;
}


/**
 * The turn and delayed-turn elements are the normal turn
 * shape which goes up then down. The inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. The delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. The vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * If the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface VerticalTurn extends PrintStyle, Placement, TrillSound {
}

/**
 * The turn and delayed-turn elements are the normal turn
 * shape which goes up then down. The inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. The delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. The vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * If the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface VerticalTurnComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
}


/**
 * The turn and delayed-turn elements are the normal turn
 * shape which goes up then down. The inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. The delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. The vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * If the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface Shake extends PrintStyle, Placement, TrillSound {
}

/**
 * The turn and delayed-turn elements are the normal turn
 * shape which goes up then down. The inverted-turn and
 * delayed-inverted-turn elements have the shape which goes
 * down and then up. The delayed-turn and delayed-inverted-turn
 * elements indicate turns that are delayed until the end of the
 * current note. The vertical-turn element has the shape
 * arranged vertically going from upper left to lower right.
 * If the slash attribute is yes, then a vertical line is used
 * to slash the turn; it is no by default.
 */
export interface ShakeComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
}


/**
 * The long attribute for the mordent and inverted-mordent
 * elements is "no" by default. The mordent element represents
 * the sign with the vertical line; the inverted-mordent
 * element represents the sign without the vertical line.
 * The approach and departure attributes are used for compound
 * ornaments, indicating how the beginning and ending of the
 * ornament look relative to the main part of the mordent.
 */
export interface Mordent extends PrintStyle, Placement, TrillSound {
    long_?: boolean;
    approach?: AboveBelow;
    departure?: AboveBelow;
}

/**
 * The long attribute for the mordent and inverted-mordent
 * elements is "no" by default. The mordent element represents
 * the sign with the vertical line; the inverted-mordent
 * element represents the sign without the vertical line.
 * The approach and departure attributes are used for compound
 * ornaments, indicating how the beginning and ending of the
 * ornament look relative to the main part of the mordent.
 */
export interface MordentComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
    long_: boolean;
    approach: AboveBelow;
    departure: AboveBelow;
}


/**
 * The long attribute for the mordent and inverted-mordent
 * elements is "no" by default. The mordent element represents
 * the sign with the vertical line; the inverted-mordent
 * element represents the sign without the vertical line.
 * The approach and departure attributes are used for compound
 * ornaments, indicating how the beginning and ending of the
 * ornament look relative to the main part of the mordent.
 */
export interface InvertedMordent extends PrintStyle, Placement, TrillSound {
    long_?: boolean;
    approach?: AboveBelow;
    departure?: AboveBelow;
}

/**
 * The long attribute for the mordent and inverted-mordent
 * elements is "no" by default. The mordent element represents
 * the sign with the vertical line; the inverted-mordent
 * element represents the sign without the vertical line.
 * The approach and departure attributes are used for compound
 * ornaments, indicating how the beginning and ending of the
 * ornament look relative to the main part of the mordent.
 */
export interface InvertedMordentComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
    long_: boolean;
    approach: AboveBelow;
    departure: AboveBelow;
}


/**
 * The name for this ornament is based on the German,
 * to avoid confusion with the more common slide element
 * defined earlier.
 */
export interface Schleifer extends PrintStyle, Placement {
}

/**
 * The name for this ornament is based on the German,
 * to avoid confusion with the more common slide element
 * defined earlier.
 */
export interface SchleiferComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The tremolo ornament can be used to indicate either
 * single-note or double-note tremolos. Single-note tremolos
 * use the single type, while double-note tremolos use the
 * start and stop types. The default is "single" for
 * compatibility with Version 1.1. The text of the element
 * indicates the number of tremolo marks and is an integer
 * from 0 to 8. Note that the number of attached beams is
 * not included in this value, but is represented separately
 * using the beam element.
 * 
 * When using double-note tremolos, the duration of each note
 * in the tremolo should correspond to half of the notated type
 * value. A time-modification element should also be added with
 * an actual-notes value of 2 and a normal-notes value of 1. If
 * used within a tuplet, this 2/1 ratio should be multiplied by
 * the existing tuplet ratio.
 * 
 * Using repeater beams for indicating tremolos is deprecated as
 * of MusicXML 3.0.
 */
export interface Tremolo extends PrintStyle, Placement {
    data?: string;
    type: StartStopSingle;
}

/**
 * The tremolo ornament can be used to indicate either
 * single-note or double-note tremolos. Single-note tremolos
 * use the single type, while double-note tremolos use the
 * start and stop types. The default is "single" for
 * compatibility with Version 1.1. The text of the element
 * indicates the number of tremolo marks and is an integer
 * from 0 to 8. Note that the number of attached beams is
 * not included in this value, but is represented separately
 * using the beam element.
 * 
 * When using double-note tremolos, the duration of each note
 * in the tremolo should correspond to half of the notated type
 * value. A time-modification element should also be added with
 * an actual-notes value of 2 and a normal-notes value of 1. If
 * used within a tuplet, this 2/1 ratio should be multiplied by
 * the existing tuplet ratio.
 * 
 * Using repeater beams for indicating tremolos is deprecated as
 * of MusicXML 3.0.
 */
export interface TremoloComplete extends PrintStyleComplete, PlacementComplete {
    data: string;
    type: StartStopSingle;
}


/**
 * The other-ornament element is used to define any ornaments
 * not yet in the MusicXML format. This allows extended
 * representation, though without application interoperability.
 */
export interface OtherOrnament extends PrintStyle, Placement {
    type: StartStopSingle;
    data?: string;
}

/**
 * The other-ornament element is used to define any ornaments
 * not yet in the MusicXML format. This allows extended
 * representation, though without application interoperability.
 */
export interface OtherOrnamentComplete extends PrintStyleComplete, PlacementComplete {
    type: StartStopSingle;
    data: string;
}


/**
 * An accidental-mark can be used as a separate notation or
 * as part of an ornament. When used in an ornament, position
 * and placement are relative to the ornament, not relative to
 * the note.
 */
export interface AccidentalMark extends PrintStyle, Placement {
    mark: string;
}

/**
 * An accidental-mark can be used as a separate notation or
 * as part of an ornament. When used in an ornament, position
 * and placement are relative to the ornament, not relative to
 * the note.
 */
export interface AccidentalMarkComplete extends PrintStyleComplete, PlacementComplete {
    mark: string;
}


/**
 * Technical indications give performance information for
 * individual instruments.
 */
export interface Technical {
    tripleTongue?: TripleTongue;
    toe?: Toe;
    hole?: Hole;
    hammerOn?: HammerOn;
    upBow?: UpBow;
    downBow?: DownBow;
    fret?: Fret;
    tap?: Tap;
    pullOff?: PullOff;
    handbell?: Handbell;
    bend?: Bend;
    thumbPosition?: ThumbPosition;
    stopped?: Stopped;
    pluck?: Pluck;
    doubleTongue?: DoubleTongue;
    string_?: String;
    openString?: OpenString;
    fingernails?: Fingernails;
    arrow?: Arrow;
    harmonic?: Harmonic;
    heel?: Heel;
    otherTechnical?: OtherTechnical;
    snapPizzicato?: SnapPizzicato;
    fingering?: Fingering;
}

/**
 * Technical indications give performance information for
 * individual instruments.
 */
export interface TechnicalComplete {
    tripleTongue: TripleTongue;
    toe: Toe;
    hole: Hole;
    hammerOn: HammerOn;
    upBow: UpBow;
    downBow: DownBow;
    fret: Fret;
    tap: Tap;
    pullOff: PullOff;
    handbell: Handbell;
    bend: Bend;
    thumbPosition: ThumbPosition;
    stopped: Stopped;
    pluck: Pluck;
    doubleTongue: DoubleTongue;
    string_: String;
    openString: OpenString;
    fingernails: Fingernails;
    arrow: Arrow;
    harmonic: Harmonic;
    heel: Heel;
    otherTechnical: OtherTechnical;
    snapPizzicato: SnapPizzicato;
    fingering: Fingering;
}


/**
 * The up-bow element represents the symbol that is used both
 * for up-bowing on bowed instruments, and up-stroke on plucked
 * instruments.
 */
export interface UpBow extends PrintStyle, Placement {
}

/**
 * The up-bow element represents the symbol that is used both
 * for up-bowing on bowed instruments, and up-stroke on plucked
 * instruments.
 */
export interface UpBowComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The down-bow element represents the symbol that is used both
 * for down-bowing on bowed instruments, and down-stroke on
 * plucked instruments.
 */
export interface DownBow extends PrintStyle, Placement {
}

/**
 * The down-bow element represents the symbol that is used both
 * for down-bowing on bowed instruments, and down-stroke on
 * plucked instruments.
 */
export interface DownBowComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The harmonic element indicates natural and artificial
 * harmonics. Natural harmonics usually notate the base
 * pitch rather than the sounding pitch. Allowing the type
 * of pitch to be specified, combined with controls for
 * appearance/playback differences, allows both the notation
 * and the sound to be represented. Artificial harmonics can
 * add a notated touching-pitch; the pitch or fret at which
 * the string is touched lightly to produce the harmonic.
 * Artificial pinch harmonics will usually not notate a
 * touching pitch. The attributes for the harmonic element
 * refer to the use of the circular harmonic symbol, typically
 * but not always used with natural harmonics.
 */
export interface Harmonic extends PrintObject, PrintStyle, Placement {
    artificial: boolean;
    touchingPitch: boolean;
    soundingPitch: boolean;
    natural: boolean;
    basePitch: boolean;
}

/**
 * The harmonic element indicates natural and artificial
 * harmonics. Natural harmonics usually notate the base
 * pitch rather than the sounding pitch. Allowing the type
 * of pitch to be specified, combined with controls for
 * appearance/playback differences, allows both the notation
 * and the sound to be represented. Artificial harmonics can
 * add a notated touching-pitch; the pitch or fret at which
 * the string is touched lightly to produce the harmonic.
 * Artificial pinch harmonics will usually not notate a
 * touching pitch. The attributes for the harmonic element
 * refer to the use of the circular harmonic symbol, typically
 * but not always used with natural harmonics.
 */
export interface HarmonicComplete extends PrintObjectComplete, PrintStyleComplete, PlacementComplete {
    artificial: boolean;
    touchingPitch: boolean;
    soundingPitch: boolean;
    natural: boolean;
    basePitch: boolean;
}


/**
 * The open-string element represents the zero-shaped
 * open string symbol.
 */
export interface OpenString extends PrintStyle, Placement {
}

/**
 * The open-string element represents the zero-shaped
 * open string symbol.
 */
export interface OpenStringComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The thumb-position element represents the thumb position
 * symbol. This is a circle with a line, where the line does
 * not come within the circle. It is distinct from the snap
 * pizzicato symbol, where the line comes inside the circle.
 */
export interface ThumbPosition extends PrintStyle, Placement {
}

/**
 * The thumb-position element represents the thumb position
 * symbol. This is a circle with a line, where the line does
 * not come within the circle. It is distinct from the snap
 * pizzicato symbol, where the line comes inside the circle.
 */
export interface ThumbPositionComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The pluck element is used to specify the plucking fingering
 * on a fretted instrument, where the fingering element refers
 * to the fretting fingering. Typical values are p, i, m, a for
 * pulgar/thumb, indicio/index, medio/middle, and anular/ring
 * fingers.
 */
export interface Pluck extends PrintStyle, Placement {
    data: string;
}

/**
 * The pluck element is used to specify the plucking fingering
 * on a fretted instrument, where the fingering element refers
 * to the fretting fingering. Typical values are p, i, m, a for
 * pulgar/thumb, indicio/index, medio/middle, and anular/ring
 * fingers.
 */
export interface PluckComplete extends PrintStyleComplete, PlacementComplete {
    data: string;
}


/**
 * The double-tongue element represents the double tongue symbol
 * (two dots arranged horizontally).
 */
export interface DoubleTongue extends PrintStyle, Placement {
}

/**
 * The double-tongue element represents the double tongue symbol
 * (two dots arranged horizontally).
 */
export interface DoubleTongueComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The triple-tongue element represents the triple tongue symbol
 * (three dots arranged horizontally).
 */
export interface TripleTongue extends PrintStyle, Placement {
}

/**
 * The triple-tongue element represents the triple tongue symbol
 * (three dots arranged horizontally).
 */
export interface TripleTongueComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The stopped element represents the stopped symbol, which looks
 * like a plus sign.
 */
export interface Stopped extends PrintStyle, Placement {
}

/**
 * The stopped element represents the stopped symbol, which looks
 * like a plus sign.
 */
export interface StoppedComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The snap-pizzicato element represents the snap pizzicato
 * symbol. This is a circle with a line, where the line comes
 * inside the circle. It is distinct from the thumb-position
 * symbol, where the line does not come inside the circle.
 */
export interface SnapPizzicato extends PrintStyle, Placement {
}

/**
 * The snap-pizzicato element represents the snap pizzicato
 * symbol. This is a circle with a line, where the line comes
 * inside the circle. It is distinct from the thumb-position
 * symbol, where the line does not come inside the circle.
 */
export interface SnapPizzicatoComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The hammer-on and pull-off elements are used in guitar
 * and fretted instrument notation. Since a single slur
 * can be marked over many notes, the hammer-on and pull-off
 * elements are separate so the individual pair of notes can
 * be specified. The element content can be used to specify
 * how the hammer-on or pull-off should be notated. An empty
 * element leaves this choice up to the application.
 */
export interface HammerOn extends PrintStyle, Placement {
    number_?: number;
    type: StartStop;
    data?: string;
}

/**
 * The hammer-on and pull-off elements are used in guitar
 * and fretted instrument notation. Since a single slur
 * can be marked over many notes, the hammer-on and pull-off
 * elements are separate so the individual pair of notes can
 * be specified. The element content can be used to specify
 * how the hammer-on or pull-off should be notated. An empty
 * element leaves this choice up to the application.
 */
export interface HammerOnComplete extends PrintStyleComplete, PlacementComplete {
    number_: number;
    type: StartStop;
    data: string;
}


/**
 * The hammer-on and pull-off elements are used in guitar
 * and fretted instrument notation. Since a single slur
 * can be marked over many notes, the hammer-on and pull-off
 * elements are separate so the individual pair of notes can
 * be specified. The element content can be used to specify
 * how the hammer-on or pull-off should be notated. An empty
 * element leaves this choice up to the application.
 */
export interface PullOff extends PrintStyle, Placement {
    number_?: number;
    type: StartStop;
    data?: string;
}

/**
 * The hammer-on and pull-off elements are used in guitar
 * and fretted instrument notation. Since a single slur
 * can be marked over many notes, the hammer-on and pull-off
 * elements are separate so the individual pair of notes can
 * be specified. The element content can be used to specify
 * how the hammer-on or pull-off should be notated. An empty
 * element leaves this choice up to the application.
 */
export interface PullOffComplete extends PrintStyleComplete, PlacementComplete {
    number_: number;
    type: StartStop;
    data: string;
}


/**
 * The bend element is used in guitar and tablature. The
 * bend-alter element indicates the number of steps in the
 * bend, similar to the alter element. As with the alter
 * element, numbers like 0.5 can be used to indicate
 * microtones. Negative numbers indicate pre-bends or
 * releases; the pre-bend and release elements are used
 * to distinguish what is intended. A with-bar element
 * indicates that the bend is to be done at the bridge
 * with a whammy or vibrato bar. The content of the
 * element indicates how this should be notated.
 */
export interface Bend extends PrintStyle, BendSound {
    bendAlter: string;
    withBar?: WithBar;
    preBend: boolean;
    release: boolean;
}

/**
 * The bend element is used in guitar and tablature. The
 * bend-alter element indicates the number of steps in the
 * bend, similar to the alter element. As with the alter
 * element, numbers like 0.5 can be used to indicate
 * microtones. Negative numbers indicate pre-bends or
 * releases; the pre-bend and release elements are used
 * to distinguish what is intended. A with-bar element
 * indicates that the bend is to be done at the bridge
 * with a whammy or vibrato bar. The content of the
 * element indicates how this should be notated.
 */
export interface BendComplete extends PrintStyleComplete, BendSoundComplete {
    bendAlter: string;
    withBar: WithBar;
    preBend: boolean;
    release: boolean;
}


/**
 * The bend element is used in guitar and tablature. The
 * bend-alter element indicates the number of steps in the
 * bend, similar to the alter element. As with the alter
 * element, numbers like 0.5 can be used to indicate
 * microtones. Negative numbers indicate pre-bends or
 * releases; the pre-bend and release elements are used
 * to distinguish what is intended. A with-bar element
 * indicates that the bend is to be done at the bridge
 * with a whammy or vibrato bar. The content of the
 * element indicates how this should be notated.
 */
export interface WithBar extends PrintStyle, Placement {
    data: string;
}

/**
 * The bend element is used in guitar and tablature. The
 * bend-alter element indicates the number of steps in the
 * bend, similar to the alter element. As with the alter
 * element, numbers like 0.5 can be used to indicate
 * microtones. Negative numbers indicate pre-bends or
 * releases; the pre-bend and release elements are used
 * to distinguish what is intended. A with-bar element
 * indicates that the bend is to be done at the bridge
 * with a whammy or vibrato bar. The content of the
 * element indicates how this should be notated.
 */
export interface WithBarComplete extends PrintStyleComplete, PlacementComplete {
    data: string;
}


/**
 * The tap element indicates a tap on the fretboard. The
 * element content allows specification of the notation;
 * + and T are common choices. If empty, the display is
 * application-specific.
 */
export interface Tap extends PrintStyle, Placement {
    data: string;
}

/**
 * The tap element indicates a tap on the fretboard. The
 * element content allows specification of the notation;
 * + and T are common choices. If empty, the display is
 * application-specific.
 */
export interface TapComplete extends PrintStyleComplete, PlacementComplete {
    data: string;
}


/**
 * The heel and toe element are used with organ pedals. The
 * substitution value is "no" if the attribute is not present.
 */
export interface Heel extends PrintStyle, Placement {
    substitution?: boolean;
}

/**
 * The heel and toe element are used with organ pedals. The
 * substitution value is "no" if the attribute is not present.
 */
export interface HeelComplete extends PrintStyleComplete, PlacementComplete {
    substitution: boolean;
}


/**
 * The heel and toe element are used with organ pedals. The
 * substitution value is "no" if the attribute is not present.
 */
export interface Toe extends PrintStyle, Placement {
    substitution?: boolean;
}

/**
 * The heel and toe element are used with organ pedals. The
 * substitution value is "no" if the attribute is not present.
 */
export interface ToeComplete extends PrintStyleComplete, PlacementComplete {
    substitution: boolean;
}


/**
 * The fingernails element is used in notation for harp and
 * other plucked string instruments.
 */
export interface Fingernails extends PrintStyle, Placement {
}

/**
 * The fingernails element is used in notation for harp and
 * other plucked string instruments.
 */
export interface FingernailsComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The hole element represents the symbols used for woodwind
 * and brass fingerings as well as other notations. The content
 * of the optional hole-type element indicates what the hole
 * symbol represents in terms of instrument fingering or other
 * techniques. The hole-closed element represents whether the
 * hole is closed, open, or half-open. Valid element values are
 * yes, no, and half. The optional location attribute indicates
 * which portion of the hole is filled in when the element value
 * is half. The optional hole-shape element indicates the shape
 * of the hole symbol; the default is a circle.
 */
export interface Hole extends PrintStyle, Placement {
    holeClosed: HoleClosed;
    holeShape: string;
    holeType?: string;
}

/**
 * The hole element represents the symbols used for woodwind
 * and brass fingerings as well as other notations. The content
 * of the optional hole-type element indicates what the hole
 * symbol represents in terms of instrument fingering or other
 * techniques. The hole-closed element represents whether the
 * hole is closed, open, or half-open. Valid element values are
 * yes, no, and half. The optional location attribute indicates
 * which portion of the hole is filled in when the element value
 * is half. The optional hole-shape element indicates the shape
 * of the hole symbol; the default is a circle.
 */
export interface HoleComplete extends PrintStyleComplete, PlacementComplete {
    holeClosed: HoleClosed;
    holeShape: string;
    holeType: string;
}


export enum HoleLocation {
    Right = 0,
    Top = 3,
    Bottom = 1,
    Left = 2
}

export enum HoleClosedType {
    No = 1,
    Yes = 0,
    Half = 2
}

/**
 * The hole element represents the symbols used for woodwind
 * and brass fingerings as well as other notations. The content
 * of the optional hole-type element indicates what the hole
 * symbol represents in terms of instrument fingering or other
 * techniques. The hole-closed element represents whether the
 * hole is closed, open, or half-open. Valid element values are
 * yes, no, and half. The optional location attribute indicates
 * which portion of the hole is filled in when the element value
 * is half. The optional hole-shape element indicates the shape
 * of the hole symbol; the default is a circle.
 */
export interface HoleClosed {
    location?: HoleLocation;
    data: HoleClosedType;
}

/**
 * The hole element represents the symbols used for woodwind
 * and brass fingerings as well as other notations. The content
 * of the optional hole-type element indicates what the hole
 * symbol represents in terms of instrument fingering or other
 * techniques. The hole-closed element represents whether the
 * hole is closed, open, or half-open. Valid element values are
 * yes, no, and half. The optional location attribute indicates
 * which portion of the hole is filled in when the element value
 * is half. The optional hole-shape element indicates the shape
 * of the hole symbol; the default is a circle.
 */
export interface HoleClosedComplete {
    location: HoleLocation;
    data: HoleClosedType;
}


/**
 * The arrow element represents an arrow used for a musical
 * technical indication. Straight arrows are represented with
 * an arrow-direction element and an optional arrow-style
 * element. Circular arrows are represented with a
 * circular-arrow element. Descriptive values use Unicode
 * arrow terminology.
 * 
 * Values for the arrow-direction element are left, up, right,
 * down, northwest, northeast, southeast, southwest, left right,
 * up down, northwest southeast, northeast southwest, and other.
 * 
 * Values for the arrow-style element are single, double,
 * filled, hollow, paired, combined, and other. Filled and
 * hollow arrows indicate polygonal single arrows. Paired
 * arrows are duplicate single arrows in the same direction.
 * Combined arrows apply to double direction arrows like
 * left right, indicating that an arrow in one direction
 * should be combined with an arrow in the other direction.
 * 
 * Values for the circular-arrow element are clockwise and
 * anticlockwise.
 */
export interface Arrow extends PrintStyle, Placement {
    arrowStyle?: string;
    arrowDirection?: string;
    circularArrow?: string;
}

/**
 * The arrow element represents an arrow used for a musical
 * technical indication. Straight arrows are represented with
 * an arrow-direction element and an optional arrow-style
 * element. Circular arrows are represented with a
 * circular-arrow element. Descriptive values use Unicode
 * arrow terminology.
 * 
 * Values for the arrow-direction element are left, up, right,
 * down, northwest, northeast, southeast, southwest, left right,
 * up down, northwest southeast, northeast southwest, and other.
 * 
 * Values for the arrow-style element are single, double,
 * filled, hollow, paired, combined, and other. Filled and
 * hollow arrows indicate polygonal single arrows. Paired
 * arrows are duplicate single arrows in the same direction.
 * Combined arrows apply to double direction arrows like
 * left right, indicating that an arrow in one direction
 * should be combined with an arrow in the other direction.
 * 
 * Values for the circular-arrow element are clockwise and
 * anticlockwise.
 */
export interface ArrowComplete extends PrintStyleComplete, PlacementComplete {
    arrowStyle: string;
    arrowDirection: string;
    circularArrow: string;
}


/**
 * The handbell element represents notation for various
 * techniques used in handbell and handchime music. Valid
 * values are damp, echo, gyro, hand martellato, mallet lift,
 * mallet table, martellato, martellato lift,
 * muted martellato, pluck lift, and swing.
 */
export interface Handbell extends PrintStyle, Placement {
    data: string;
}

/**
 * The handbell element represents notation for various
 * techniques used in handbell and handchime music. Valid
 * values are damp, echo, gyro, hand martellato, mallet lift,
 * mallet table, martellato, martellato lift,
 * muted martellato, pluck lift, and swing.
 */
export interface HandbellComplete extends PrintStyleComplete, PlacementComplete {
    data: string;
}


/**
 * The other-technical element is used to define any technical
 * indications not yet in the MusicXML format. This allows
 * extended representation, though without application
 * interoperability.
 */
export interface OtherTechnical extends PrintStyle, Placement {
    data: string;
}

/**
 * The other-technical element is used to define any technical
 * indications not yet in the MusicXML format. This allows
 * extended representation, though without application
 * interoperability.
 */
export interface OtherTechnicalComplete extends PrintStyleComplete, PlacementComplete {
    data: string;
}


/**
 * Articulations and accents are grouped together here.
 */
export interface Articulations {
    accent?: Accent;
    doit?: Doit;
    breathMark?: BreathMark;
    otherArticulations?: OtherArticulation[];
    detachedLegato?: DetachedLegato;
    staccatissimo?: Staccatissimo;
    plop?: Plop;
    unstress?: Unstress;
    strongAccent?: StrongAccent;
    staccato?: Staccato;
    spiccato?: Spiccato;
    scoop?: Scoop;
    falloff?: Falloff;
    caesura?: Caesura;
    stress?: Stress;
    tenuto?: Tenuto;
}

/**
 * Articulations and accents are grouped together here.
 */
export interface ArticulationsComplete {
    accent: Accent;
    doit: Doit;
    breathMark: BreathMark;
    otherArticulations: OtherArticulation[];
    detachedLegato: DetachedLegato;
    staccatissimo: Staccatissimo;
    plop: Plop;
    unstress: Unstress;
    strongAccent: StrongAccent;
    staccato: Staccato;
    spiccato: Spiccato;
    scoop: Scoop;
    falloff: Falloff;
    caesura: Caesura;
    stress: Stress;
    tenuto: Tenuto;
}


export interface Accent extends PrintStyle, Placement {
}

export interface AccentComplete extends PrintStyleComplete, PlacementComplete {
}


export interface StrongAccent extends PrintStyle, Placement {
    type?: UpDown;
}

export interface StrongAccentComplete extends PrintStyleComplete, PlacementComplete {
    type: UpDown;
}


/**
 * The staccato element is used for a dot articulation, as
 * opposed to a stroke or a wedge.
 */
export interface Staccato extends PrintStyle, Placement {
}

/**
 * The staccato element is used for a dot articulation, as
 * opposed to a stroke or a wedge.
 */
export interface StaccatoComplete extends PrintStyleComplete, PlacementComplete {
}


export interface Tenuto extends PrintStyle, Placement {
}

export interface TenutoComplete extends PrintStyleComplete, PlacementComplete {
}


export interface DetachedLegato extends PrintStyle, Placement {
}

export interface DetachedLegatoComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The staccatissimo element is used for a wedge articulation,
 * as opposed to a dot or a stroke.
 */
export interface Staccatissimo extends PrintStyle, Placement {
}

/**
 * The staccatissimo element is used for a wedge articulation,
 * as opposed to a dot or a stroke.
 */
export interface StaccatissimoComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The spiccato element is used for a stroke articulation, as
 * opposed to a dot or a wedge.
 */
export interface Spiccato extends PrintStyle, Placement {
}

/**
 * The spiccato element is used for a stroke articulation, as
 * opposed to a dot or a wedge.
 */
export interface SpiccatoComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The scoop, plop, doit, and falloff elements are
 * indeterminate slides attached to a single note.
 * Scoops and plops come before the main note, coming
 * from below and above the pitch, respectively. Doits
 * and falloffs come after the main note, going above
 * and below the pitch, respectively.
 */
export interface Scoop extends LineShape, LineType, DashedFormatting, PrintStyle, Placement {
}

/**
 * The scoop, plop, doit, and falloff elements are
 * indeterminate slides attached to a single note.
 * Scoops and plops come before the main note, coming
 * from below and above the pitch, respectively. Doits
 * and falloffs come after the main note, going above
 * and below the pitch, respectively.
 */
export interface ScoopComplete extends LineShapeComplete, LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, PlacementComplete {
}


/**
 * The scoop, plop, doit, and falloff elements are
 * indeterminate slides attached to a single note.
 * Scoops and plops come before the main note, coming
 * from below and above the pitch, respectively. Doits
 * and falloffs come after the main note, going above
 * and below the pitch, respectively.
 */
export interface Plop extends LineShape, LineType, DashedFormatting, PrintStyle, Placement {
}

/**
 * The scoop, plop, doit, and falloff elements are
 * indeterminate slides attached to a single note.
 * Scoops and plops come before the main note, coming
 * from below and above the pitch, respectively. Doits
 * and falloffs come after the main note, going above
 * and below the pitch, respectively.
 */
export interface PlopComplete extends LineShapeComplete, LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, PlacementComplete {
}


/**
 * The scoop, plop, doit, and falloff elements are
 * indeterminate slides attached to a single note.
 * Scoops and plops come before the main note, coming
 * from below and above the pitch, respectively. Doits
 * and falloffs come after the main note, going above
 * and below the pitch, respectively.
 */
export interface Doit extends LineShape, LineType, DashedFormatting, PrintStyle, Placement {
}

/**
 * The scoop, plop, doit, and falloff elements are
 * indeterminate slides attached to a single note.
 * Scoops and plops come before the main note, coming
 * from below and above the pitch, respectively. Doits
 * and falloffs come after the main note, going above
 * and below the pitch, respectively.
 */
export interface DoitComplete extends LineShapeComplete, LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, PlacementComplete {
}


/**
 * The scoop, plop, doit, and falloff elements are
 * indeterminate slides attached to a single note.
 * Scoops and plops come before the main note, coming
 * from below and above the pitch, respectively. Doits
 * and falloffs come after the main note, going above
 * and below the pitch, respectively.
 */
export interface Falloff extends LineShape, LineType, DashedFormatting, PrintStyle, Placement {
}

/**
 * The scoop, plop, doit, and falloff elements are
 * indeterminate slides attached to a single note.
 * Scoops and plops come before the main note, coming
 * from below and above the pitch, respectively. Doits
 * and falloffs come after the main note, going above
 * and below the pitch, respectively.
 */
export interface FalloffComplete extends LineShapeComplete, LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, PlacementComplete {
}


export enum BreathMarkType {
    Empty = 2,
    Comma = 0,
    Tick = 1
}

/**
 * The breath-mark element may have a text value to
 * indicate the symbol used for the mark. Valid values are
 * comma, tick, and an empty string.
 */
export interface BreathMark extends LineShape, LineType, DashedFormatting, PrintStyle, Placement {
    type: BreathMarkType;
}

/**
 * The breath-mark element may have a text value to
 * indicate the symbol used for the mark. Valid values are
 * comma, tick, and an empty string.
 */
export interface BreathMarkComplete extends LineShapeComplete, LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, PlacementComplete {
    type: BreathMarkType;
}


export interface Caesura extends PrintStyle, Placement {
}

export interface CaesuraComplete extends PrintStyleComplete, PlacementComplete {
}


export interface Stress extends PrintStyle, Placement {
}

export interface StressComplete extends PrintStyleComplete, PlacementComplete {
}


export interface Unstress extends PrintStyle, Placement {
}

export interface UnstressComplete extends PrintStyleComplete, PlacementComplete {
}


/**
 * The other-articulation element is used to define any
 * articulations not yet in the MusicXML format. This allows
 * extended representation, though without application
 * interoperability.
 */
export interface OtherArticulation extends PrintStyle, Placement {
    data: string;
}

/**
 * The other-articulation element is used to define any
 * articulations not yet in the MusicXML format. This allows
 * extended representation, though without application
 * interoperability.
 */
export interface OtherArticulationComplete extends PrintStyleComplete, PlacementComplete {
    data: string;
}


/**
 * The arpeggiate element indicates that this note is part of
 * an arpeggiated chord. The number attribute can be used to
 * distinguish between two simultaneous chords arpeggiated
 * separately (different numbers) or together (same number).
 * The up-down attribute is used if there is an arrow on the
 * arpeggio sign. By default, arpeggios go from the lowest to
 * highest note.
 */
export interface Arpeggiate extends Position, Placement, Color {
    number_?: number;
    direction?: UpDown;
}

/**
 * The arpeggiate element indicates that this note is part of
 * an arpeggiated chord. The number attribute can be used to
 * distinguish between two simultaneous chords arpeggiated
 * separately (different numbers) or together (same number).
 * The up-down attribute is used if there is an arrow on the
 * arpeggio sign. By default, arpeggios go from the lowest to
 * highest note.
 */
export interface ArpeggiateComplete extends PositionComplete, PlacementComplete, ColorComplete {
    number_: number;
    direction: UpDown;
}


/**
 * The non-arpeggiate element indicates that this note is at
 * the top or bottom of a bracket indicating to not arpeggiate
 * these notes. Since this does not involve playback, it is
 * only used on the top or bottom notes, not on each note
 * as for the arpeggiate element.
 */
export interface NonArpeggiate extends Position, Placement, Color {
    number_?: number;
    type: TopBottom;
}

/**
 * The non-arpeggiate element indicates that this note is at
 * the top or bottom of a bracket indicating to not arpeggiate
 * these notes. Since this does not involve playback, it is
 * only used on the top or bottom notes, not on each note
 * as for the arpeggiate element.
 */
export interface NonArpeggiateComplete extends PositionComplete, PlacementComplete, ColorComplete {
    number_: number;
    type: TopBottom;
}


/**
 * Text underlays for lyrics, based on Humdrum with support
 * for other formats. The lyric number indicates multiple
 * lines, though a name can be used as well (as in Finale's
 * verse/chorus/section specification). Word extensions are
 * represented using the extend element. Hyphenation is
 * indicated by the syllabic element, which can be single,
 * begin, end, or middle. These represent single-syllable
 * words, word-beginning syllables, word-ending syllables,
 * and mid-word syllables. Multiple syllables on a single
 * note are separated by elision elements. A hyphen in the
 * text element should only be used for an actual hyphenated
 * word. Two text elements that are not separated by an
 * elision element are part of the same syllable, but may have
 * different text formatting.
 * 
 * Humming and laughing representations are taken from
 * Humdrum. The end-line and end-paragraph elements come
 * from RP-017 for Standard MIDI File Lyric meta-events;
 * they help facilitate lyric display for Karaoke and
 * similar applications. Language names for text elements
 * come from ISO 639, with optional country subcodes from
 * ISO 3166. Justification is center by default; placement is
 * below by default. The print-object attribute can override
 * a note's print-lyric attribute in cases where only some
 * lyrics on a note are printed, as when lyrics for later verses
 * are printed in a block of text rather than with each note.
 */
export interface Lyric extends Justify, Position, Placement, Color, PrintObject, Editorial {
    extend?: Extend;
    endLine: boolean;
    syllabics?: Syllabic[];
    texts?: Text[];
    laughing: boolean;
    humming: boolean;
    number_?: number;
    endParagraph: boolean;
    elisions?: Elision[];
    name?: string;
}

/**
 * Text underlays for lyrics, based on Humdrum with support
 * for other formats. The lyric number indicates multiple
 * lines, though a name can be used as well (as in Finale's
 * verse/chorus/section specification). Word extensions are
 * represented using the extend element. Hyphenation is
 * indicated by the syllabic element, which can be single,
 * begin, end, or middle. These represent single-syllable
 * words, word-beginning syllables, word-ending syllables,
 * and mid-word syllables. Multiple syllables on a single
 * note are separated by elision elements. A hyphen in the
 * text element should only be used for an actual hyphenated
 * word. Two text elements that are not separated by an
 * elision element are part of the same syllable, but may have
 * different text formatting.
 * 
 * Humming and laughing representations are taken from
 * Humdrum. The end-line and end-paragraph elements come
 * from RP-017 for Standard MIDI File Lyric meta-events;
 * they help facilitate lyric display for Karaoke and
 * similar applications. Language names for text elements
 * come from ISO 639, with optional country subcodes from
 * ISO 3166. Justification is center by default; placement is
 * below by default. The print-object attribute can override
 * a note's print-lyric attribute in cases where only some
 * lyrics on a note are printed, as when lyrics for later verses
 * are printed in a block of text rather than with each note.
 */
export interface LyricComplete extends JustifyComplete, PositionComplete, PlacementComplete, ColorComplete, PrintObjectComplete, EditorialComplete {
    extend: Extend;
    endLine: boolean;
    syllabics: Syllabic[];
    texts: Text[];
    laughing: boolean;
    humming: boolean;
    number_: number;
    endParagraph: boolean;
    elisions: Elision[];
    name: string;
}


export interface Text extends Font, Color, TextDecoration, TextRotation, LetterSpacing, TextDirection {
    data: string;
}

export interface TextComplete extends FontComplete, ColorComplete, TextDecorationComplete, TextRotationComplete, LetterSpacingComplete, TextDirectionComplete {
    data: string;
}


export interface Syllabic extends Font, Color {
    data: string;
}

export interface SyllabicComplete extends FontComplete, ColorComplete {
    data: string;
}


/**
 * The elision element text specifies the symbol used to
 * display the elision. Common values are a no-break space
 * (Unicode 00A0), an underscore (Unicode 005F), or an undertie
 * (Unicode 203F).
 */
export interface Elision extends Font, Color {
    data: string;
}

/**
 * The elision element text specifies the symbol used to
 * display the elision. Common values are a no-break space
 * (Unicode 00A0), an underscore (Unicode 005F), or an undertie
 * (Unicode 203F).
 */
export interface ElisionComplete extends FontComplete, ColorComplete {
    data: string;
}


/**
 * The extend element represents lyric word extension /
 * melisma lines as well as figured bass extensions. The
 * optional type and position attributes are added in
 * Version 3.0 to provide better formatting control.
 */
export interface Extend extends PrintStyle {
    type?: StartStopContinue;
}

/**
 * The extend element represents lyric word extension /
 * melisma lines as well as figured bass extensions. The
 * optional type and position attributes are added in
 * Version 3.0 to provide better formatting control.
 */
export interface ExtendComplete extends PrintStyleComplete {
    type: StartStopContinue;
}


/**
 * Figured bass elements take their position from the first
 * regular note (not a grace note or chord note) that follows
 * in score order. The optional duration element is used to
 * indicate changes of figures under a note.    
 * 
 * Figures are ordered from top to bottom. A figure-number is a
 * number. Values for prefix and suffix include the accidental
 * values sharp, flat, natural, double-sharp, flat-flat, and
 * sharp-sharp. Suffixes include both symbols that come after
 * the figure number and those that overstrike the figure number.
 * The suffix value slash is used for slashed numbers indicating
 * chromatic alteration. The orientation and display of the slash
 * usually depends on the figure number. The prefix and suffix
 * elements may contain additional values for symbols specific
 * to particular figured bass styles. The value of parentheses
 * is "no" if not present.
 */
export interface FiguredBass extends Editorial, PrintStyle, Printout {
    figures: Figure[];
    duration?: number;
    parentheses?: boolean;
}

/**
 * Figured bass elements take their position from the first
 * regular note (not a grace note or chord note) that follows
 * in score order. The optional duration element is used to
 * indicate changes of figures under a note.    
 * 
 * Figures are ordered from top to bottom. A figure-number is a
 * number. Values for prefix and suffix include the accidental
 * values sharp, flat, natural, double-sharp, flat-flat, and
 * sharp-sharp. Suffixes include both symbols that come after
 * the figure number and those that overstrike the figure number.
 * The suffix value slash is used for slashed numbers indicating
 * chromatic alteration. The orientation and display of the slash
 * usually depends on the figure number. The prefix and suffix
 * elements may contain additional values for symbols specific
 * to particular figured bass styles. The value of parentheses
 * is "no" if not present.
 */
export interface FiguredBassComplete extends EditorialComplete, PrintStyleComplete, PrintoutComplete {
    figures: Figure[];
    duration: number;
    parentheses: boolean;
}


export interface Figure extends PrintStyle {
    prefix?: Prefix;
    figureNumber?: FigureNumber;
    extend?: Extend;
    suffix?: Suffix;
}

export interface FigureComplete extends PrintStyleComplete {
    prefix: Prefix;
    figureNumber: FigureNumber;
    extend: Extend;
    suffix: Suffix;
}


export interface Prefix extends PrintStyle {
    data: string;
}

export interface PrefixComplete extends PrintStyleComplete {
    data: string;
}


export interface FigureNumber extends PrintStyle {
    data: string;
}

export interface FigureNumberComplete extends PrintStyleComplete {
    data: string;
}


export interface Suffix extends PrintStyle {
    data: string;
}

export interface SuffixComplete extends PrintStyleComplete {
    data: string;
}


/**
 * The backup and forward elements are required to coordinate
 * multiple voices in one part, including music on multiple
 * staves.
 * 
 * The backup element is generally used to
 * move between voices and staves. Thus the backup element
 * does not include voice or staff elements. Duration values
 * should always be positive, and should not cross measure
 * boundaries or mid-measure changes in the divisions value.
 */
export interface Backup extends Editorial {
    duration: number;
}

/**
 * The backup and forward elements are required to coordinate
 * multiple voices in one part, including music on multiple
 * staves.
 * 
 * The backup element is generally used to
 * move between voices and staves. Thus the backup element
 * does not include voice or staff elements. Duration values
 * should always be positive, and should not cross measure
 * boundaries or mid-measure changes in the divisions value.
 */
export interface BackupComplete extends EditorialComplete {
    duration: number;
}


/**
 * The backup and forward elements are required to coordinate
 * multiple voices in one part, including music on multiple
 * staves.
 * 
 * The forward element is generally used within voices
 * and staves. Duration values should always be positive, and
 * should not cross measure boundaries or mid-measure changes
 * in the divisions value.
 */
export interface Forward extends EditorialVoice {
    duration: number;
    staff?: Staff;
}

/**
 * The backup and forward elements are required to coordinate
 * multiple voices in one part, including music on multiple
 * staves.
 * 
 * The forward element is generally used within voices
 * and staves. Duration values should always be positive, and
 * should not cross measure boundaries or mid-measure changes
 * in the divisions value.
 */
export interface ForwardComplete extends EditorialVoiceComplete {
    duration: number;
    staff: Staff;
}


export enum BarlineLocation {
    Right = 1,
    Middle = 2,
    Left = 0
}

/**
 * If a barline is other than a normal single barline, it
 * should be represented by a barline element that describes
 * it. This includes information about repeats and multiple
 * endings, as well as line style. Barline data is on the same
 * level as the other musical data in a score - a child of a
 * measure in a partwise score, or a part in a timewise score.
 * This allows for barlines within measures, as in dotted
 * barlines that subdivide measures in complex meters. The two
 * fermata elements allow for fermatas on both sides of the
 * barline (the lower one inverted).
 * 
 * Barlines have a location attribute to make it easier to
 * process barlines independently of the other musical data
 * in a score. It is often easier to set up measures
 * separately from entering notes. The location attribute
 * must match where the barline element occurs within the
 * rest of the musical data in the score. If location is left,
 * it should be the first element in the measure, aside from
 * the print, bookmark, and link elements. If location is
 * right, it should be the last element, again with the
 * possible exception of the print, bookmark, and link
 * elements. If no location is specified, the right barline
 * is the default. The segno, coda, and divisions attributes
 * work the same way as in the sound element defined in the
 * direction.mod file. They are used for playback when barline
 * elements contain segno or coda child elements.
 */
export interface Barline extends Editorial {
    segno?: Segno;
    coda?: Coda;
    location?: BarlineLocation;
    codaAttrib: string;
    wavyLine?: WavyLine;
    fermatas?: Fermata[];
    segnoAttrib: string;
    divisions: string;
    barStyle?: BarStyle;
    ending?: Ending;
    repeat?: Repeat;
}

/**
 * If a barline is other than a normal single barline, it
 * should be represented by a barline element that describes
 * it. This includes information about repeats and multiple
 * endings, as well as line style. Barline data is on the same
 * level as the other musical data in a score - a child of a
 * measure in a partwise score, or a part in a timewise score.
 * This allows for barlines within measures, as in dotted
 * barlines that subdivide measures in complex meters. The two
 * fermata elements allow for fermatas on both sides of the
 * barline (the lower one inverted).
 * 
 * Barlines have a location attribute to make it easier to
 * process barlines independently of the other musical data
 * in a score. It is often easier to set up measures
 * separately from entering notes. The location attribute
 * must match where the barline element occurs within the
 * rest of the musical data in the score. If location is left,
 * it should be the first element in the measure, aside from
 * the print, bookmark, and link elements. If location is
 * right, it should be the last element, again with the
 * possible exception of the print, bookmark, and link
 * elements. If no location is specified, the right barline
 * is the default. The segno, coda, and divisions attributes
 * work the same way as in the sound element defined in the
 * direction.mod file. They are used for playback when barline
 * elements contain segno or coda child elements.
 */
export interface BarlineComplete extends EditorialComplete {
    segno: Segno;
    coda: Coda;
    location: BarlineLocation;
    codaAttrib: string;
    wavyLine: WavyLine;
    fermatas: Fermata[];
    segnoAttrib: string;
    divisions: string;
    barStyle: BarStyle;
    ending: Ending;
    repeat: Repeat;
}


/**
 * Bar-style contains style information. Choices are
 * regular, dotted, dashed, heavy, light-light,
 * light-heavy, heavy-light, heavy-heavy, tick (a
 * short stroke through the top line), short (a partial
 * barline between the 2nd and 4th lines), and none.
 */
export enum BarStyleType {
    Regular = 0,
    LightHeavy = 5,
    HeavyLight = 6,
    Short = 9,
    None = 10,
    Dashed = 2,
    HeavyHeavy = 7,
    Tick = 8,
    Dotted = 1,
    Heavy = 3,
    LightLight = 4
}

/**
 * Bar-style contains style information. Choices are
 * regular, dotted, dashed, heavy, light-light,
 * light-heavy, heavy-light, heavy-heavy, tick (a
 * short stroke through the top line), short (a partial
 * barline between the 2nd and 4th lines), and none.
 */
export interface BarStyle extends Color {
    data: BarStyleType;
}

/**
 * Bar-style contains style information. Choices are
 * regular, dotted, dashed, heavy, light-light,
 * light-heavy, heavy-light, heavy-heavy, tick (a
 * short stroke through the top line), short (a partial
 * barline between the 2nd and 4th lines), and none.
 */
export interface BarStyleComplete extends ColorComplete {
    data: BarStyleType;
}


export enum StartStopDiscontinue {
    Discontinue = 2,
    Start = 0,
    Stop = 1
}

/**
 * Endings refers to multiple (e.g. first and second) endings.
 * Typically, the start type is associated with the left
 * barline of the first measure in an ending. The stop and
 * discontinue types are associated with the right barline of
 * the last measure in an ending. Stop is used when the ending
 * mark concludes with a downward jog, as is typical for first
 * endings. Discontinue is used when there is no downward jog,
 * as is typical for second endings that do not conclude a
 * piece. The length of the jog can be specified using the
 * end-length attribute. The text-x and text-y attributes
 * are offsets that specify where the baseline of the start
 * of the ending text appears, relative to the start of the
 * ending line.
 * 
 * The number attribute reflects the numeric values of what
 * is under the ending line. Single endings such as "1" or
 * comma-separated multiple endings such as "1, 2" may be
 * used. The ending element text is used when the text
 * displayed in the ending is different than what appears in
 * the number attribute. The print-object element is used to
 * indicate when an ending is present but not printed, as is
 * often the case for many parts in a full score.
 */
export interface Ending extends PrintObject, PrintStyle {
    endLength: number;
    textX: number;
    number_: number;
    textY: number;
    type: StartStopDiscontinue;
    ending?: string;
}

/**
 * Endings refers to multiple (e.g. first and second) endings.
 * Typically, the start type is associated with the left
 * barline of the first measure in an ending. The stop and
 * discontinue types are associated with the right barline of
 * the last measure in an ending. Stop is used when the ending
 * mark concludes with a downward jog, as is typical for first
 * endings. Discontinue is used when there is no downward jog,
 * as is typical for second endings that do not conclude a
 * piece. The length of the jog can be specified using the
 * end-length attribute. The text-x and text-y attributes
 * are offsets that specify where the baseline of the start
 * of the ending text appears, relative to the start of the
 * ending line.
 * 
 * The number attribute reflects the numeric values of what
 * is under the ending line. Single endings such as "1" or
 * comma-separated multiple endings such as "1, 2" may be
 * used. The ending element text is used when the text
 * displayed in the ending is different than what appears in
 * the number attribute. The print-object element is used to
 * indicate when an ending is present but not printed, as is
 * often the case for many parts in a full score.
 */
export interface EndingComplete extends PrintObjectComplete, PrintStyleComplete {
    endLength: number;
    textX: number;
    number_: number;
    textY: number;
    type: StartStopDiscontinue;
    ending: string;
}


export enum WingedType {
    None = 0,
    Curved = 2,
    DoubleCurved = 4,
    Straight = 1,
    DoubleStraight = 3
}

export enum DirectionTypeBg {
    Forward = 1,
    Backward = 0
}

/**
 * Repeat marks. The start of the repeat has a forward direction
 * while the end of the repeat has a backward direction. Backward
 * repeats that are not part of an ending can use the times
 * attribute to indicate the number of times the repeated section
 * is played. The winged attribute indicates whether the repeat
 * has winged extensions that appear above and below the barline.
 * The straight and curved values represent single wings, while
 * the double-straight and double-curved values represent double
 * wings. The none value indicates no wings and is the default.
 */
export interface Repeat {
    times: string;
    winged: WingedType;
    direction: DirectionTypeBg;
}

/**
 * Repeat marks. The start of the repeat has a forward direction
 * while the end of the repeat has a backward direction. Backward
 * repeats that are not part of an ending can use the times
 * attribute to indicate the number of times the repeated section
 * is played. The winged attribute indicates whether the repeat
 * has winged extensions that appear above and below the barline.
 * The straight and curved values represent single wings, while
 * the double-straight and double-curved values represent double
 * wings. The none value indicates no wings and is the default.
 */
export interface RepeatComplete {
    times: string;
    winged: WingedType;
    direction: DirectionTypeBg;
}


/**
 * The tip-direction entity represents the direction in which
 * the tip of a stick or beater points, using Unicode arrow
 * terminology.
 */
export enum TipDirection {
    Right = 3,
    Northwest = 4,
    Southwest = 7,
    Down = 1,
    Northeast = 5,
    Southeast = 6,
    Up = 0,
    Left = 2
}

/**
 * A direction is a musical indication that is not attached
 * to a specific note. Two or more may be combined to
 * indicate starts and stops of wedges, dashes, etc.
 * 
 * By default, a series of direction-type elements and a
 * series of child elements of a direction-type within a
 * single direction element follow one another in sequence
 * visually. For a series of direction-type children, non-
 * positional formatting attributes are carried over from
 * the previous element by default.
 */
export interface Direction extends EditorialVoice, Placement, Directive {
    directionTypes: DirectionType[];
    staff?: Staff;
    offset?: Offset;
    sound?: Sound;
}

/**
 * A direction is a musical indication that is not attached
 * to a specific note. Two or more may be combined to
 * indicate starts and stops of wedges, dashes, etc.
 * 
 * By default, a series of direction-type elements and a
 * series of child elements of a direction-type within a
 * single direction element follow one another in sequence
 * visually. For a series of direction-type children, non-
 * positional formatting attributes are carried over from
 * the previous element by default.
 */
export interface DirectionComplete extends EditorialVoiceComplete, PlacementComplete, DirectiveComplete {
    directionTypes: DirectionType[];
    staff: Staff;
    offset: Offset;
    sound: Sound;
}


/**
 * Textual direction types may have more than 1 component
 * due to multiple fonts. The dynamics element may also be
 * used in the notations element, and is defined in the
 * common.mod file.
 */
export interface DirectionType {
    percussions: Percussion[];
    rehearsals: Rehearsal[];
    pedal: Pedal;
    principalVoice: PrincipalVoice;
    accordionRegistration: AccordionRegistration;
    eyeglasses: Eyeglasses;
    image: Image;
    harpPedals: HarpPedals;
    metronome: Metronome;
    otherDirection: OtherDirection;
    segnos: Segno[];
    scordatura: Scordatura;
    stringMute: StringMute;
    wedge?: Wedge;
    dashes?: Dashes;
    damp: Damp;
    bracket: Bracket;
    dynamics?: Dynamics;
    octaveShift: OctaveShift;
    words: Words[];
    dampAll: DampAll;
    codas: Coda[];
}

/**
 * Textual direction types may have more than 1 component
 * due to multiple fonts. The dynamics element may also be
 * used in the notations element, and is defined in the
 * common.mod file.
 */
export interface DirectionTypeComplete {
    percussions: Percussion[];
    rehearsals: Rehearsal[];
    pedal: Pedal;
    principalVoice: PrincipalVoice;
    accordionRegistration: AccordionRegistration;
    eyeglasses: Eyeglasses;
    image: Image;
    harpPedals: HarpPedals;
    metronome: Metronome;
    otherDirection: OtherDirection;
    segnos: Segno[];
    scordatura: Scordatura;
    stringMute: StringMute;
    wedge: Wedge;
    dashes: Dashes;
    damp: Damp;
    bracket: Bracket;
    dynamics: Dynamics;
    octaveShift: OctaveShift;
    words: Words[];
    dampAll: DampAll;
    codas: Coda[];
}


/**
 * Language is Italian ("it") by default. Enclosure is
 * square by default. Left justification is assumed if
 * not specified.
 */
export interface Rehearsal extends TextFormatting {
    data: string;
}

/**
 * Language is Italian ("it") by default. Enclosure is
 * square by default. Left justification is assumed if
 * not specified.
 */
export interface RehearsalComplete extends TextFormattingComplete {
    data: string;
}


/**
 * Left justification is assumed if not specified.
 * Language is Italian ("it") by default. Enclosure
 * is none by default.
 */
export interface Words extends TextFormatting {
    data: string;
}

/**
 * Left justification is assumed if not specified.
 * Language is Italian ("it") by default. Enclosure
 * is none by default.
 */
export interface WordsComplete extends TextFormattingComplete {
    data: string;
}


export enum WedgeType {
    Diminuendo = 1,
    Crescendo = 0,
    Stop = 2,
    Continue = 3
}

/**
 * Wedge spread is measured in tenths of staff line space.
 * The type is crescendo for the start of a wedge that is
 * closed at the left side, and diminuendo for the start
 * of a wedge that is closed on the right side. Spread
 * values at the start of a crescendo wedge or end of a
 * diminuendo wedge are ignored. The niente attribute is yes
 * if a circle appears at the point of the wedge, indicating
 * a crescendo from nothing or diminuendo to nothing. It is
 * no by default, and used only when the type is crescendo,
 * or the type is stop for a wedge that began with a diminuendo
 * type. The line-type is solid by default. The continue type
 * is used for formatting wedges over a system break, or for
 * other situations where a single wedge is divided into
 * multiple segments.
 */
export interface Wedge extends LineType, DashedFormatting, Position, Color {
    number_: number;
    neinte: boolean;
    type: WedgeType;
    spread: number;
}

/**
 * Wedge spread is measured in tenths of staff line space.
 * The type is crescendo for the start of a wedge that is
 * closed at the left side, and diminuendo for the start
 * of a wedge that is closed on the right side. Spread
 * values at the start of a crescendo wedge or end of a
 * diminuendo wedge are ignored. The niente attribute is yes
 * if a circle appears at the point of the wedge, indicating
 * a crescendo from nothing or diminuendo to nothing. It is
 * no by default, and used only when the type is crescendo,
 * or the type is stop for a wedge that began with a diminuendo
 * type. The line-type is solid by default. The continue type
 * is used for formatting wedges over a system break, or for
 * other situations where a single wedge is divided into
 * multiple segments.
 */
export interface WedgeComplete extends LineTypeComplete, DashedFormattingComplete, PositionComplete, ColorComplete {
    number_: number;
    neinte: boolean;
    type: WedgeType;
    spread: number;
}


/**
 * Dashes, used for instance with cresc. and dim. marks.
 * 
 */
export interface Dashes extends DashedFormatting, Position, Color {
    number_: number;
    type: StartStopContinue;
}

/**
 * Dashes, used for instance with cresc. and dim. marks.
 * 
 */
export interface DashesComplete extends DashedFormattingComplete, PositionComplete, ColorComplete {
    number_: number;
    type: StartStopContinue;
}


export enum LineEndType {
    None = 4,
    Both = 2,
    Arrow = 3,
    Down = 1,
    Up = 0
}

/**
 * Brackets are combined with words in a variety of
 * modern directions. The line-end attribute specifies
 * if there is a jog up or down (or both), an arrow,
 * or nothing at the start or end of the bracket. If
 * the line-end is up or down, the length of the jog
 * can be specified using the end-length attribute.
 * The line-type is solid by default.
 */
export interface Bracket extends LineType, DashedFormatting, Position, Color {
    endLength: number;
    number_: number;
    type: StartStopContinue;
    lineEnd: LineEndType;
}

/**
 * Brackets are combined with words in a variety of
 * modern directions. The line-end attribute specifies
 * if there is a jog up or down (or both), an arrow,
 * or nothing at the start or end of the bracket. If
 * the line-end is up or down, the length of the jog
 * can be specified using the end-length attribute.
 * The line-type is solid by default.
 */
export interface BracketComplete extends LineTypeComplete, DashedFormattingComplete, PositionComplete, ColorComplete {
    endLength: number;
    number_: number;
    type: StartStopContinue;
    lineEnd: LineEndType;
}


export enum PedalType {
    Change = 3,
    Start = 0,
    Stop = 1,
    Continue = 2
}

/**
 * Piano pedal marks. The line attribute is yes if pedal
 * lines are used. The sign attribute is yes if Ped and *
 * signs are used. For MusicXML 2.0 compatibility, the sign
 * attribute is yes by default if the line attribute is no,
 * and is no by default if the line attribute is yes. The
 * change and continue types are used when the line attribute
 * is yes. The change type indicates a pedal lift and retake
 * indicated with an inverted V marking. The continue type
 * allows more precise formatting across system breaks and for
 * more complex pedaling lines. The alignment attributes are
 * ignored if the line attribute is yes.
 */
export interface Pedal extends PrintStyleAlign {
    line: boolean;
    sign: boolean;
    type: PedalType;
}

/**
 * Piano pedal marks. The line attribute is yes if pedal
 * lines are used. The sign attribute is yes if Ped and *
 * signs are used. For MusicXML 2.0 compatibility, the sign
 * attribute is yes by default if the line attribute is no,
 * and is no by default if the line attribute is yes. The
 * change and continue types are used when the line attribute
 * is yes. The change type indicates a pedal lift and retake
 * indicated with an inverted V marking. The continue type
 * allows more precise formatting across system breaks and for
 * more complex pedaling lines. The alignment attributes are
 * ignored if the line attribute is yes.
 */
export interface PedalComplete extends PrintStyleAlignComplete {
    line: boolean;
    sign: boolean;
    type: PedalType;
}


/**
 * Metronome marks and other metric relationships.
 * 
 * The beat-unit values are the same as for a type element,
 * and the beat-unit-dot works like the dot element. The
 * per-minute element can be a number, or a text description
 * including numbers. The parentheses attribute indicates
 * whether or not to put the metronome mark in parentheses;
 * its value is no if not specified. If a font is specified for
 * the per-minute element, it overrides the font specified for
 * the overall metronome element. This allows separate
 * specification of a music font for beat-unit and a text
 * font for the numeric value in cases where a single
 * metronome font is not used.
 * 
 * The metronome-note and metronome-relation elements
 * allow for the specification of more complicated metric
 * relationships, such as swing tempo marks where
 * two eighths are equated to a quarter note / eighth note
 * triplet. The metronome-type, metronome-beam, and
 * metronome-dot elements work like the type, beam, and
 * dot elements. The metronome-tuplet element uses the
 * same element structure as the time-modification element
 * along with some attributes from the tuplet element. The
 * metronome-relation element describes the relationship
 * symbol that goes between the two sets of metronome-note
 * elements. The currently allowed value is equals, but this
 * may expand in future versions. If the element is empty,
 * the equals value is used. The metronome-relation and
 * the following set of metronome-note elements are optional
 * to allow display of an isolated Grundschlagnote.
 */
export interface Metronome extends PrintStyleAlign, Justify {
    metronomeNotes: MetronomeNote[];
    perMinute: PerMinute;
    parentheses: boolean;
    beatUnit: string;
    beatUnitDots: BeatUnitDot[];
    metronomeRelation: string;
}

/**
 * Metronome marks and other metric relationships.
 * 
 * The beat-unit values are the same as for a type element,
 * and the beat-unit-dot works like the dot element. The
 * per-minute element can be a number, or a text description
 * including numbers. The parentheses attribute indicates
 * whether or not to put the metronome mark in parentheses;
 * its value is no if not specified. If a font is specified for
 * the per-minute element, it overrides the font specified for
 * the overall metronome element. This allows separate
 * specification of a music font for beat-unit and a text
 * font for the numeric value in cases where a single
 * metronome font is not used.
 * 
 * The metronome-note and metronome-relation elements
 * allow for the specification of more complicated metric
 * relationships, such as swing tempo marks where
 * two eighths are equated to a quarter note / eighth note
 * triplet. The metronome-type, metronome-beam, and
 * metronome-dot elements work like the type, beam, and
 * dot elements. The metronome-tuplet element uses the
 * same element structure as the time-modification element
 * along with some attributes from the tuplet element. The
 * metronome-relation element describes the relationship
 * symbol that goes between the two sets of metronome-note
 * elements. The currently allowed value is equals, but this
 * may expand in future versions. If the element is empty,
 * the equals value is used. The metronome-relation and
 * the following set of metronome-note elements are optional
 * to allow display of an isolated Grundschlagnote.
 */
export interface MetronomeComplete extends PrintStyleAlignComplete, JustifyComplete {
    metronomeNotes: MetronomeNote[];
    perMinute: PerMinute;
    parentheses: boolean;
    beatUnit: string;
    beatUnitDots: BeatUnitDot[];
    metronomeRelation: string;
}


export interface BeatUnitDot {
}

export interface BeatUnitDotComplete {
}


export interface PerMinute extends Font {
    data: string;
}

export interface PerMinuteComplete extends FontComplete {
    data: string;
}


export interface MetronomeNote {
    metronomeDots: MetronomeDot[];
    metronomeBeams: MetronomeBeam[];
    metronomeType: string;
    metronomeTuplet: MetronomeTuplet;
}

export interface MetronomeNoteComplete {
    metronomeDots: MetronomeDot[];
    metronomeBeams: MetronomeBeam[];
    metronomeType: string;
    metronomeTuplet: MetronomeTuplet;
}


export interface MetronomeDot {
}

export interface MetronomeDotComplete {
}


export interface MetronomeBeam {
    number_: number;
    data: string;
}

export interface MetronomeBeamComplete {
    number_: number;
    data: string;
}


export interface MetronomeTuplet {
    actualNotes: ActualNotes;
    bracket: boolean;
    showNumber: ActualBothNone;
    normalType: string;
    type: StartStop;
    normalNotes: NormalNotes;
    normalDots: NormalDot[];
}

export interface MetronomeTupletComplete {
    actualNotes: ActualNotes;
    bracket: boolean;
    showNumber: ActualBothNone;
    normalType: string;
    type: StartStop;
    normalNotes: NormalNotes;
    normalDots: NormalDot[];
}


export enum OctaveShiftType {
    Down = 2,
    Stop = 3,
    Up = 1,
    Continue = 4
}

/**
 * Octave shifts indicate where notes are shifted up or down
 * from their true pitched values because of printing
 * difficulty. Thus a treble clef line noted with 8va will
 * be indicated with an octave-shift down from the pitch
 * data indicated in the notes. A size of 8 indicates one
 * octave; a size of 15 indicates two octaves.
 */
export interface OctaveShift extends DashedFormatting, PrintStyle {
    number_: number;
    size: number;
    type: OctaveShiftType;
}

/**
 * Octave shifts indicate where notes are shifted up or down
 * from their true pitched values because of printing
 * difficulty. Thus a treble clef line noted with 8va will
 * be indicated with an octave-shift down from the pitch
 * data indicated in the notes. A size of 8 indicates one
 * octave; a size of 15 indicates two octaves.
 */
export interface OctaveShiftComplete extends DashedFormattingComplete, PrintStyleComplete {
    number_: number;
    size: number;
    type: OctaveShiftType;
}


/**
 * The harp-pedals element is used to create harp pedal
 * diagrams. The pedal-step and pedal-alter elements use
 * the same values as the step and alter elements. For
 * easiest reading, the pedal-tuning elements should follow
 * standard harp pedal order, with pedal-step values of
 * D, C, B, E, F, G, and A.
 */
export interface HarpPedals extends PrintStyleAlign {
    pedalTunings: PedalTuning[];
}

/**
 * The harp-pedals element is used to create harp pedal
 * diagrams. The pedal-step and pedal-alter elements use
 * the same values as the step and alter elements. For
 * easiest reading, the pedal-tuning elements should follow
 * standard harp pedal order, with pedal-step values of
 * D, C, B, E, F, G, and A.
 */
export interface HarpPedalsComplete extends PrintStyleAlignComplete {
    pedalTunings: PedalTuning[];
}


export interface PedalTuning {
    pedalStep: string;
    pedalAlter: string;
}

export interface PedalTuningComplete {
    pedalStep: string;
    pedalAlter: string;
}


/**
 * Harp damping marks
 */
export interface Damp extends PrintStyleAlign {
}

/**
 * Harp damping marks
 */
export interface DampComplete extends PrintStyleAlignComplete {
}


export interface DampAll extends PrintStyleAlign {
}

export interface DampAllComplete extends PrintStyleAlignComplete {
}


export interface Eyeglasses extends PrintStyleAlign {
}

export interface EyeglassesComplete extends PrintStyleAlignComplete {
}


export interface StringMute extends PrintStyleAlign {
    type: string;
}

export interface StringMuteComplete extends PrintStyleAlignComplete {
    type: string;
}


/**
 * Scordatura string tunings are represented by a series
 * of accord elements. The tuning-step, tuning-alter,
 * and tuning-octave elements are also used with the
 * staff-tuning element, and are defined in the common.mod
 * file. Strings are numbered from high to low.
 */
export interface Scordatura {
    accords: Accord[];
}

/**
 * Scordatura string tunings are represented by a series
 * of accord elements. The tuning-step, tuning-alter,
 * and tuning-octave elements are also used with the
 * staff-tuning element, and are defined in the common.mod
 * file. Strings are numbered from high to low.
 */
export interface ScordaturaComplete {
    accords: Accord[];
}


/**
 * Scordatura string tunings are represented by a series
 * of accord elements. The tuning-step, tuning-alter,
 * and tuning-octave elements are also used with the
 * staff-tuning element, and are defined in the common.mod
 * file. Strings are numbered from high to low.
 */
export interface Accord {
    tuningAlter: TuningAlter;
    string_: string;
    tuningStep: string;
    tuningOctave: TuningOctave;
}

/**
 * Scordatura string tunings are represented by a series
 * of accord elements. The tuning-step, tuning-alter,
 * and tuning-octave elements are also used with the
 * staff-tuning element, and are defined in the common.mod
 * file. Strings are numbered from high to low.
 */
export interface AccordComplete {
    tuningAlter: TuningAlter;
    string_: string;
    tuningStep: string;
    tuningOctave: TuningOctave;
}


/**
 * The image element is used to include graphical images
 * in a score. The required source attribute is the URL
 * for the image file. The required type attribute is the
 * MIME type for the image file format. Typical choices
 * include application/postscript, image/gif, image/jpeg,
 * image/png, and image/tiff.
 */
export interface Image extends Position, Halign, ValignImage {
    type: string;
    source: string;
}

/**
 * The image element is used to include graphical images
 * in a score. The required source attribute is the URL
 * for the image file. The required type attribute is the
 * MIME type for the image file format. Typical choices
 * include application/postscript, image/gif, image/jpeg,
 * image/png, and image/tiff.
 */
export interface ImageComplete extends PositionComplete, HalignComplete, ValignImageComplete {
    type: string;
    source: string;
}


export enum VoiceSymbol {
    None = 4,
    Hauptstimme = 1,
    Nebenstimme = 2,
    Plain = 3
}

/**
 * The principal-voice element represents principal and
 * secondary voices in a score, either for analysis or
 * for square bracket symbols that appear in a score.
 * The symbol attribute indicates the type of symbol used at
 * the start of the principal-voice. Valid values are
 * Hauptstimme, Nebenstimme, plain (for a plain square
 * bracket), and none. The content of the principal-voice
 * element is used for analysis and may be any text value.
 * When used for analysis separate from any printed score
 * markings, the symbol attribute should be set to "none".
 */
export interface PrincipalVoice extends PrintStyleAlign {
    symbol: VoiceSymbol;
    data?: string;
    type: StartStop;
}

/**
 * The principal-voice element represents principal and
 * secondary voices in a score, either for analysis or
 * for square bracket symbols that appear in a score.
 * The symbol attribute indicates the type of symbol used at
 * the start of the principal-voice. Valid values are
 * Hauptstimme, Nebenstimme, plain (for a plain square
 * bracket), and none. The content of the principal-voice
 * element is used for analysis and may be any text value.
 * When used for analysis separate from any printed score
 * markings, the symbol attribute should be set to "none".
 */
export interface PrincipalVoiceComplete extends PrintStyleAlignComplete {
    symbol: VoiceSymbol;
    data: string;
    type: StartStop;
}


/**
 * The accordion-registration element is use for accordion
 * registration symbols. These are circular symbols divided
 * horizontally into high, middle, and low sections that
 * correspond to 4', 8', and 16' pipes. Each accordion-high,
 * accordion-middle, and accordion-low element represents
 * the presence of one or more dots in the registration
 * diagram. The accordion-middle element may have text
 * values of 1, 2, or 3, corresponding to have 1 to 3 dots
 * in the middle section. An accordion-registration element
 * needs to have at least one of the child elements present.
 */
export interface AccordionRegistration extends PrintStyleAlign {
    accordionMiddle: string;
    accordionHigh: boolean;
    accordionLow: boolean;
}

/**
 * The accordion-registration element is use for accordion
 * registration symbols. These are circular symbols divided
 * horizontally into high, middle, and low sections that
 * correspond to 4', 8', and 16' pipes. Each accordion-high,
 * accordion-middle, and accordion-low element represents
 * the presence of one or more dots in the registration
 * diagram. The accordion-middle element may have text
 * values of 1, 2, or 3, corresponding to have 1 to 3 dots
 * in the middle section. An accordion-registration element
 * needs to have at least one of the child elements present.
 */
export interface AccordionRegistrationComplete extends PrintStyleAlignComplete {
    accordionMiddle: string;
    accordionHigh: boolean;
    accordionLow: boolean;
}


/**
 * The percussion element is used to define percussion
 * pictogram symbols. Definitions for these symbols can be
 * found in Kurt Stone's "Music Notation in the Twentieth
 * Century" on pages 206-212 and 223. Some values are
 * added to these based on how usage has evolved in
 * the 30 years since Stone's book was published.
 */
export interface Percussion extends PrintStyleAlign, Enclosure {
    stickLocation: string;
    otherPercussion: string;
    wood: string;
    effect: string;
    glass: string;
    timpani: Timpani;
    stick: Stick;
    metal: string;
    pitched: string;
    membrane: string;
    beater: Beater;
}

/**
 * The percussion element is used to define percussion
 * pictogram symbols. Definitions for these symbols can be
 * found in Kurt Stone's "Music Notation in the Twentieth
 * Century" on pages 206-212 and 223. Some values are
 * added to these based on how usage has evolved in
 * the 30 years since Stone's book was published.
 */
export interface PercussionComplete extends PrintStyleAlignComplete, EnclosureComplete {
    stickLocation: string;
    otherPercussion: string;
    wood: string;
    effect: string;
    glass: string;
    timpani: Timpani;
    stick: Stick;
    metal: string;
    pitched: string;
    membrane: string;
    beater: Beater;
}


/**
 * The timpani element represents the timpani pictogram.
 * 
 */
export interface Timpani {
}

/**
 * The timpani element represents the timpani pictogram.
 * 
 */
export interface TimpaniComplete {
}


/**
 * The beater element represents pictograms for beaters,
 * mallets, and sticks that do not have different materials
 * represented in the pictogram. Valid values are bow,
 * chime hammer, coin, finger, fingernail, fist,
 * guiro scraper, hammer, hand, jazz stick, knitting needle,
 * metal hammer, snare stick, spoon mallet, triangle beater,
 * triangle beater plain, and wire brush. The jazz stick value
 * refers to Stone's plastic tip snare stick. The triangle
 * beater plain value refers to the plain line version of the
 * pictogram. The finger and hammer values are in addition
 * to Stone's list. The tip attribute represents the direction
 * in which the tip of a beater points.
 */
export interface Beater {
    data: string;
    tip: TipDirection;
}

/**
 * The beater element represents pictograms for beaters,
 * mallets, and sticks that do not have different materials
 * represented in the pictogram. Valid values are bow,
 * chime hammer, coin, finger, fingernail, fist,
 * guiro scraper, hammer, hand, jazz stick, knitting needle,
 * metal hammer, snare stick, spoon mallet, triangle beater,
 * triangle beater plain, and wire brush. The jazz stick value
 * refers to Stone's plastic tip snare stick. The triangle
 * beater plain value refers to the plain line version of the
 * pictogram. The finger and hammer values are in addition
 * to Stone's list. The tip attribute represents the direction
 * in which the tip of a beater points.
 */
export interface BeaterComplete {
    data: string;
    tip: TipDirection;
}


/**
 * The stick element represents pictograms where the material
 * in the stick, mallet, or beater is included. Valid values
 * for stick-type are bass drum, double bass drum, timpani,
 * xylophone, and yarn. Valid values for stick-material are
 * soft, medium, hard, shaded, and x. The shaded and x values
 * reflect different uses for brass, wood, and steel core
 * beaters of different types. The tip attribute represents
 * the direction in which the tip of a stick points.
 */
export interface Stick {
    stickMaterial: string;
    stickType: string;
    tip: TipDirection;
}

/**
 * The stick element represents pictograms where the material
 * in the stick, mallet, or beater is included. Valid values
 * for stick-type are bass drum, double bass drum, timpani,
 * xylophone, and yarn. Valid values for stick-material are
 * soft, medium, hard, shaded, and x. The shaded and x values
 * reflect different uses for brass, wood, and steel core
 * beaters of different types. The tip attribute represents
 * the direction in which the tip of a stick points.
 */
export interface StickComplete {
    stickMaterial: string;
    stickType: string;
    tip: TipDirection;
}


/**
 * An offset is represented in terms of divisions, and
 * indicates where the direction will appear relative to
 * the current musical location. This affects the visual
 * appearance of the direction. If the sound attribute is
 * "yes", then the offset affects playback too. If the sound
 * attribute is "no", then any sound associated with the
 * direction takes effect at the current location. The sound
 * attribute is "no" by default for compatibility with earlier
 * versions of the MusicXML format. If an element within a
 * direction includes a default-x attribute, the offset value
 * will be ignored when determining the appearance of that
 * element.
 */
export interface Offset {
    data: string;
    sound: boolean;
}

/**
 * An offset is represented in terms of divisions, and
 * indicates where the direction will appear relative to
 * the current musical location. This affects the visual
 * appearance of the direction. If the sound attribute is
 * "yes", then the offset affects playback too. If the sound
 * attribute is "no", then any sound associated with the
 * direction takes effect at the current location. The sound
 * attribute is "no" by default for compatibility with earlier
 * versions of the MusicXML format. If an element within a
 * direction includes a default-x attribute, the offset value
 * will be ignored when determining the appearance of that
 * element.
 */
export interface OffsetComplete {
    data: string;
    sound: boolean;
}


/**
 * The harmony elements are based on Humdrum's **harm
 * encoding, extended to support chord symbols in popular
 * music as well as functional harmony analysis in classical
 * music.
 * 
 * If there are alternate harmonies possible, this can be
 * specified using multiple harmony elements differentiated
 * by type. Explicit harmonies have all note present in the
 * music; implied have some notes missing but implied;
 * alternate represents alternate analyses.
 * 
 * The harmony object may be used for analysis or for
 * chord symbols. The print-object attribute controls
 * whether or not anything is printed due to the harmony
 * element. The print-frame attribute controls printing
 * of a frame or fretboard diagram. The print-style entity
 * sets the default for the harmony, but individual elements
 * can override this with their own print-style values.
 * 
 * A harmony element can contain many stacked chords (e.g.
 * V of II). A sequence of harmony-chord entities is used
 * for this type of secondary function, where V of II would
 * be represented by a harmony-chord with a V function
 * followed by a harmony-chord with a II function.
 */
export interface HarmonyChord {
    root: Root;
    function_: Function;
    kind: Kind;
    degree: Degree;
    inversion: Inversion;
    bass: Bass;
}

/**
 * The harmony elements are based on Humdrum's **harm
 * encoding, extended to support chord symbols in popular
 * music as well as functional harmony analysis in classical
 * music.
 * 
 * If there are alternate harmonies possible, this can be
 * specified using multiple harmony elements differentiated
 * by type. Explicit harmonies have all note present in the
 * music; implied have some notes missing but implied;
 * alternate represents alternate analyses.
 * 
 * The harmony object may be used for analysis or for
 * chord symbols. The print-object attribute controls
 * whether or not anything is printed due to the harmony
 * element. The print-frame attribute controls printing
 * of a frame or fretboard diagram. The print-style entity
 * sets the default for the harmony, but individual elements
 * can override this with their own print-style values.
 * 
 * A harmony element can contain many stacked chords (e.g.
 * V of II). A sequence of harmony-chord entities is used
 * for this type of secondary function, where V of II would
 * be represented by a harmony-chord with a V function
 * followed by a harmony-chord with a II function.
 */
export interface HarmonyChordComplete {
    root: Root;
    function_: Function;
    kind: Kind;
    degree: Degree;
    inversion: Inversion;
    bass: Bass;
}


export enum ExplicitImpliedAlternate {
    Explicit = 1,
    Implied = 2,
    Alternate = 3
}

export interface Harmony extends HarmonyChord, Editorial, PrintObject, PrintStyle, Placement {
    frame: Frame;
    printFrame: boolean;
    staff: Staff;
    harmonyType: ExplicitImpliedAlternate;
    offset: Offset;
}

export interface HarmonyComplete extends HarmonyChordComplete, EditorialComplete, PrintObjectComplete, PrintStyleComplete, PlacementComplete {
    frame: Frame;
    printFrame: boolean;
    staff: Staff;
    harmonyType: ExplicitImpliedAlternate;
    offset: Offset;
}


/**
 * A root is a pitch name like C, D, E, where a function
 * is an indication like I, II, III. Root is generally
 * used with pop chord symbols, function with classical
 * functional harmony. It is an either/or choice to avoid
 * data inconsistency. Function requires that the key be
 * specified in the encoding.
 * 
 * The root element has a root-step and optional root-alter
 * similar to the step and alter elements in a pitch, but
 * renamed to distinguish the different musical meanings.
 * The root-step text element indicates how the root should
 * appear in a score if not using the element contents.
 * In some chord styles, this will include the root-alter
 * information as well. In that case, the print-object
 * attribute of the root-alter element can be set to no.
 * The root-alter location attribute indicates whether
 * the alteration should appear to the left or the right
 * of the root-step; it is right by default.
 */
export interface Root {
    rootStep: RootStep;
    rootAlter: RootAlter;
}

/**
 * A root is a pitch name like C, D, E, where a function
 * is an indication like I, II, III. Root is generally
 * used with pop chord symbols, function with classical
 * functional harmony. It is an either/or choice to avoid
 * data inconsistency. Function requires that the key be
 * specified in the encoding.
 * 
 * The root element has a root-step and optional root-alter
 * similar to the step and alter elements in a pitch, but
 * renamed to distinguish the different musical meanings.
 * The root-step text element indicates how the root should
 * appear in a score if not using the element contents.
 * In some chord styles, this will include the root-alter
 * information as well. In that case, the print-object
 * attribute of the root-alter element can be set to no.
 * The root-alter location attribute indicates whether
 * the alteration should appear to the left or the right
 * of the root-step; it is right by default.
 */
export interface RootComplete {
    rootStep: RootStep;
    rootAlter: RootAlter;
}


export interface RootStep extends PrintStyle {
    text: string;
    data: string;
}

export interface RootStepComplete extends PrintStyleComplete {
    text: string;
    data: string;
}


export interface RootAlter extends PrintObject, PrintStyle {
    location: LeftRight;
    data: string;
}

export interface RootAlterComplete extends PrintObjectComplete, PrintStyleComplete {
    location: LeftRight;
    data: string;
}


export interface Function extends PrintStyle {
    data: string;
}

export interface FunctionComplete extends PrintStyleComplete {
    data: string;
}


/**
 * Kind indicates the type of chord. Degree elements
 * can then add, subtract, or alter from these
 * starting points. Values include:
 * 
 * Triads:
 * major (major third, perfect fifth)
 * minor (minor third, perfect fifth)
 * augmented (major third, augmented fifth)
 * diminished (minor third, diminished fifth)
 * Sevenths:
 * dominant (major triad, minor seventh)
 * major-seventh (major triad, major seventh)
 * minor-seventh (minor triad, minor seventh)
 * diminished-seventh
 *     (diminished triad, diminished seventh)
 * augmented-seventh
 *     (augmented triad, minor seventh)
 * half-diminished
 *     (diminished triad, minor seventh)
 * major-minor
 *     (minor triad, major seventh)
 * Sixths:
 * major-sixth (major triad, added sixth)
 * minor-sixth (minor triad, added sixth)
 * Ninths:
 * dominant-ninth (dominant-seventh, major ninth)
 * major-ninth (major-seventh, major ninth)
 * minor-ninth (minor-seventh, major ninth)
 * 11ths (usually as the basis for alteration):
 * dominant-11th (dominant-ninth, perfect 11th)
 * major-11th (major-ninth, perfect 11th)
 * minor-11th (minor-ninth, perfect 11th)
 * 13ths (usually as the basis for alteration):
 * dominant-13th (dominant-11th, major 13th)
 * major-13th (major-11th, major 13th)
 * minor-13th (minor-11th, major 13th)
 * Suspended:
 * suspended-second (major second, perfect fifth)
 * suspended-fourth (perfect fourth, perfect fifth)
 * Functional sixths:
 * Neapolitan
 * Italian
 * French
 * German
 * Other:
 * pedal (pedal-point bass)
 * power (perfect fifth)
 * Tristan
 * 
 * The "other" kind is used when the harmony is entirely
 * composed of add elements. The "none" kind is used to
 * explicitly encode absence of chords or functional
 * harmony.
 * 
 * The attributes are used to indicate the formatting
 * of the symbol. Since the kind element is the constant
 * in all the harmony-chord entities that can make up
 * a polychord, many formatting attributes are here.
 * 
 * The use-symbols attribute is yes if the kind should be
 * represented when possible with harmony symbols rather
 * than letters and numbers. These symbols include:
 * 
 * major: a triangle, like Unicode 25B3
 * minor: -, like Unicode 002D
 * augmented: +, like Unicode 002B
 * diminished: °, like Unicode 00B0
 * half-diminished: ø, like Unicode 00F8
 * 
 * For the major-minor kind, only the minor symbol is used when
 * use-symbols is yes. The major symbol is set using the symbol
 * attribute in the degree-value element. The corresponding
 * degree-alter value will usually be 0 in this case.
 * 
 * The text attribute describes how the kind should be spelled
 * in a score. If use-symbols is yes, the value of the text
 * attribute follows the symbol. The stack-degrees attribute
 * is yes if the degree elements should be stacked above each
 * other. The parentheses-degrees attribute is yes if all the
 * degrees should be in parentheses. The bracket-degrees
 * attribute is yes if all the degrees should be in a bracket.
 * If not specified, these values are implementation-specific.
 * The alignment attributes are for the entire harmony-chord
 * entity of which this kind element is a part.
 */
export interface Kind extends PrintStyle, Halign, Valign {
    parenthesesDegrees: boolean;
    useSymbols: boolean;
    text: string;
    data: string;
    stackDegrees: boolean;
    bracketDegrees: boolean;
}

/**
 * Kind indicates the type of chord. Degree elements
 * can then add, subtract, or alter from these
 * starting points. Values include:
 * 
 * Triads:
 * major (major third, perfect fifth)
 * minor (minor third, perfect fifth)
 * augmented (major third, augmented fifth)
 * diminished (minor third, diminished fifth)
 * Sevenths:
 * dominant (major triad, minor seventh)
 * major-seventh (major triad, major seventh)
 * minor-seventh (minor triad, minor seventh)
 * diminished-seventh
 *     (diminished triad, diminished seventh)
 * augmented-seventh
 *     (augmented triad, minor seventh)
 * half-diminished
 *     (diminished triad, minor seventh)
 * major-minor
 *     (minor triad, major seventh)
 * Sixths:
 * major-sixth (major triad, added sixth)
 * minor-sixth (minor triad, added sixth)
 * Ninths:
 * dominant-ninth (dominant-seventh, major ninth)
 * major-ninth (major-seventh, major ninth)
 * minor-ninth (minor-seventh, major ninth)
 * 11ths (usually as the basis for alteration):
 * dominant-11th (dominant-ninth, perfect 11th)
 * major-11th (major-ninth, perfect 11th)
 * minor-11th (minor-ninth, perfect 11th)
 * 13ths (usually as the basis for alteration):
 * dominant-13th (dominant-11th, major 13th)
 * major-13th (major-11th, major 13th)
 * minor-13th (minor-11th, major 13th)
 * Suspended:
 * suspended-second (major second, perfect fifth)
 * suspended-fourth (perfect fourth, perfect fifth)
 * Functional sixths:
 * Neapolitan
 * Italian
 * French
 * German
 * Other:
 * pedal (pedal-point bass)
 * power (perfect fifth)
 * Tristan
 * 
 * The "other" kind is used when the harmony is entirely
 * composed of add elements. The "none" kind is used to
 * explicitly encode absence of chords or functional
 * harmony.
 * 
 * The attributes are used to indicate the formatting
 * of the symbol. Since the kind element is the constant
 * in all the harmony-chord entities that can make up
 * a polychord, many formatting attributes are here.
 * 
 * The use-symbols attribute is yes if the kind should be
 * represented when possible with harmony symbols rather
 * than letters and numbers. These symbols include:
 * 
 * major: a triangle, like Unicode 25B3
 * minor: -, like Unicode 002D
 * augmented: +, like Unicode 002B
 * diminished: °, like Unicode 00B0
 * half-diminished: ø, like Unicode 00F8
 * 
 * For the major-minor kind, only the minor symbol is used when
 * use-symbols is yes. The major symbol is set using the symbol
 * attribute in the degree-value element. The corresponding
 * degree-alter value will usually be 0 in this case.
 * 
 * The text attribute describes how the kind should be spelled
 * in a score. If use-symbols is yes, the value of the text
 * attribute follows the symbol. The stack-degrees attribute
 * is yes if the degree elements should be stacked above each
 * other. The parentheses-degrees attribute is yes if all the
 * degrees should be in parentheses. The bracket-degrees
 * attribute is yes if all the degrees should be in a bracket.
 * If not specified, these values are implementation-specific.
 * The alignment attributes are for the entire harmony-chord
 * entity of which this kind element is a part.
 */
export interface KindComplete extends PrintStyleComplete, HalignComplete, ValignComplete {
    parenthesesDegrees: boolean;
    useSymbols: boolean;
    text: string;
    data: string;
    stackDegrees: boolean;
    bracketDegrees: boolean;
}


/**
 * Inversion is a number indicating which inversion is used:
 * 0 for root position, 1 for first inversion, etc.
 */
export interface Inversion extends PrintStyle {
    data: string;
}

/**
 * Inversion is a number indicating which inversion is used:
 * 0 for root position, 1 for first inversion, etc.
 */
export interface InversionComplete extends PrintStyleComplete {
    data: string;
}


/**
 * Bass is used to indicate a bass note in popular music
 * chord symbols, e.g. G/C. It is generally not used in
 * functional harmony, as inversion is generally not used
 * in pop chord symbols. As with root, it is divided into
 * step and alter elements, similar to pitches. The attributes
 * for bass-step and bass-alter work the same way as
 * the corresponding attributes for root-step and root-alter.
 */
export interface Bass {
    bassStep: BassStep;
    bassAlter: BassAlter;
}

/**
 * Bass is used to indicate a bass note in popular music
 * chord symbols, e.g. G/C. It is generally not used in
 * functional harmony, as inversion is generally not used
 * in pop chord symbols. As with root, it is divided into
 * step and alter elements, similar to pitches. The attributes
 * for bass-step and bass-alter work the same way as
 * the corresponding attributes for root-step and root-alter.
 */
export interface BassComplete {
    bassStep: BassStep;
    bassAlter: BassAlter;
}


/**
 * Bass is used to indicate a bass note in popular music
 * chord symbols, e.g. G/C. It is generally not used in
 * functional harmony, as inversion is generally not used
 * in pop chord symbols. As with root, it is divided into
 * step and alter elements, similar to pitches. The attributes
 * for bass-step and bass-alter work the same way as
 * the corresponding attributes for root-step and root-alter.
 */
export interface BassStep extends PrintStyle {
    text: string;
    data: string;
}

/**
 * Bass is used to indicate a bass note in popular music
 * chord symbols, e.g. G/C. It is generally not used in
 * functional harmony, as inversion is generally not used
 * in pop chord symbols. As with root, it is divided into
 * step and alter elements, similar to pitches. The attributes
 * for bass-step and bass-alter work the same way as
 * the corresponding attributes for root-step and root-alter.
 */
export interface BassStepComplete extends PrintStyleComplete {
    text: string;
    data: string;
}


export interface BassAlter extends PrintObject, PrintStyle {
    location: LeftRight;
    data: string;
}

export interface BassAlterComplete extends PrintObjectComplete, PrintStyleComplete {
    location: LeftRight;
    data: string;
}


/**
 * The degree element is used to add, alter, or subtract
 * individual notes in the chord. The degree-value element
 * is a number indicating the degree of the chord (1 for
 * the root, 3 for third, etc). The degree-alter element
 * is like the alter element in notes: 1 for sharp, -1 for
 * flat, etc. The degree-type element can be add, alter, or
 * subtract. If the degree-type is alter or subtract, the
 * degree-alter is relative to the degree already in the
 * chord based on its kind element. If the degree-type is
 * add, the degree-alter is relative to a dominant chord
 * (major and perfect intervals except for a minor
 * seventh). The print-object attribute can be used to
 * keep the degree from printing separately when it has
 * already taken into account in the text attribute of
 * the kind element. The plus-minus attribute is used to
 * indicate if plus and minus symbols should be used
 * instead of sharp and flat symbols to display the degree
 * alteration; it is no by default.
 * 
 * The degree-value and degree-type text attributes specify
 * how the value and type of the degree should be displayed
 * in a score. The degree-value symbol attribute indicates
 * that a symbol should be used in specifying the degree.
 * If the symbol attribute is present, the value of the text
 * attribute follows the symbol.
 * 
 * A harmony of kind "other" can be spelled explicitly by
 * using a series of degree elements together with a root.
 */
export interface Degree extends PrintObject {
    degreeAlter: DegreeAlter;
    degreeValue: DegreeValue;
    degreeType: DegreeType;
}

/**
 * The degree element is used to add, alter, or subtract
 * individual notes in the chord. The degree-value element
 * is a number indicating the degree of the chord (1 for
 * the root, 3 for third, etc). The degree-alter element
 * is like the alter element in notes: 1 for sharp, -1 for
 * flat, etc. The degree-type element can be add, alter, or
 * subtract. If the degree-type is alter or subtract, the
 * degree-alter is relative to the degree already in the
 * chord based on its kind element. If the degree-type is
 * add, the degree-alter is relative to a dominant chord
 * (major and perfect intervals except for a minor
 * seventh). The print-object attribute can be used to
 * keep the degree from printing separately when it has
 * already taken into account in the text attribute of
 * the kind element. The plus-minus attribute is used to
 * indicate if plus and minus symbols should be used
 * instead of sharp and flat symbols to display the degree
 * alteration; it is no by default.
 * 
 * The degree-value and degree-type text attributes specify
 * how the value and type of the degree should be displayed
 * in a score. The degree-value symbol attribute indicates
 * that a symbol should be used in specifying the degree.
 * If the symbol attribute is present, the value of the text
 * attribute follows the symbol.
 * 
 * A harmony of kind "other" can be spelled explicitly by
 * using a series of degree elements together with a root.
 */
export interface DegreeComplete extends PrintObjectComplete {
    degreeAlter: DegreeAlter;
    degreeValue: DegreeValue;
    degreeType: DegreeType;
}


export enum ChordType {
    Augmented = 3,
    Diminished = 4,
    Major = 1,
    Minor = 2,
    HalfDiminished = 5
}

export interface DegreeValue extends PrintStyle {
    symbol: ChordType;
    text: string;
    data: string;
}

export interface DegreeValueComplete extends PrintStyleComplete {
    symbol: ChordType;
    text: string;
    data: string;
}


export interface DegreeAlter extends PrintStyle {
    plusMinus: boolean;
    data: string;
}

export interface DegreeAlterComplete extends PrintStyleComplete {
    plusMinus: boolean;
    data: string;
}


export interface DegreeType extends PrintStyle {
    text: string;
    data: string;
}

export interface DegreeTypeComplete extends PrintStyleComplete {
    text: string;
    data: string;
}


/**
 * The frame element represents a frame or fretboard diagram
 * used together with a chord symbol. The representation is
 * based on the NIFF guitar grid with additional information.
 * The frame-strings and frame-frets elements give the
 * overall size of the frame in vertical lines (strings) and
 * horizontal spaces (frets).
 * 
 * The frame element's unplayed attribute indicates what to
 * display above a string that has no associated frame-note
 * element. Typical values are x and the empty string. If the
 * attribute is not present, the display of the unplayed
 * string is application-defined.
 */
export interface Frame extends Position, Color, Halign, ValignImage {
    frameStrings: string;
    frameNotes: FrameNote[];
    unplayed: string;
    frameFrets: string;
    firstFret: FirstFret;
    width: number;
    height: number;
}

/**
 * The frame element represents a frame or fretboard diagram
 * used together with a chord symbol. The representation is
 * based on the NIFF guitar grid with additional information.
 * The frame-strings and frame-frets elements give the
 * overall size of the frame in vertical lines (strings) and
 * horizontal spaces (frets).
 * 
 * The frame element's unplayed attribute indicates what to
 * display above a string that has no associated frame-note
 * element. Typical values are x and the empty string. If the
 * attribute is not present, the display of the unplayed
 * string is application-defined.
 */
export interface FrameComplete extends PositionComplete, ColorComplete, HalignComplete, ValignImageComplete {
    frameStrings: string;
    frameNotes: FrameNote[];
    unplayed: string;
    frameFrets: string;
    firstFret: FirstFret;
    width: number;
    height: number;
}


/**
 * The first-fret indicates which fret is shown in the top
 * space of the frame; it is fret 1 if the element is not
 * present. The optional text attribute indicates how this
 * is represented in the fret diagram, while the location
 * attribute indicates whether the text appears to the left
 * or right of the frame.
 */
export interface FirstFret {
    text: string;
    location: LeftRight;
    data: string;
}

/**
 * The first-fret indicates which fret is shown in the top
 * space of the frame; it is fret 1 if the element is not
 * present. The optional text attribute indicates how this
 * is represented in the fret diagram, while the location
 * attribute indicates whether the text appears to the left
 * or right of the frame.
 */
export interface FirstFretComplete {
    text: string;
    location: LeftRight;
    data: string;
}


/**
 * The frame-note element represents each note included in
 * the frame. The definitions for string, fret, and fingering
 * are found in the common.mod file. An open string will
 * have a fret value of 0, while a muted string will not be
 * associated with a frame-note element.
 */
export interface FrameNote {
    barre: Barre;
    string_: String;
    fingering: Fingering;
    fret: Fret;
}

/**
 * The frame-note element represents each note included in
 * the frame. The definitions for string, fret, and fingering
 * are found in the common.mod file. An open string will
 * have a fret value of 0, while a muted string will not be
 * associated with a frame-note element.
 */
export interface FrameNoteComplete {
    barre: Barre;
    string_: String;
    fingering: Fingering;
    fret: Fret;
}


/**
 * The barre element indicates placing a finger over
 * multiple strings on a single fret. The type is "start"
 * for the lowest pitched string (e.g., the string with
 * the highest MusicXML number) and is "stop" for the
 * highest pitched string.
 */
export interface Barre extends Color {
    type: StartStop;
}

/**
 * The barre element indicates placing a finger over
 * multiple strings on a single fret. The type is "start"
 * for the lowest pitched string (e.g., the string with
 * the highest MusicXML number) and is "stop" for the
 * highest pitched string.
 */
export interface BarreComplete extends ColorComplete {
    type: StartStop;
}


/**
 * The grouping element is used for musical analysis. When
 * the element type is "start" or "single", it usually contains
 * one or more feature elements. The number attribute is used
 * for distinguishing between overlapping and hierarchical
 * groupings. The member-of attribute allows for easy
 * distinguishing of what grouping elements are in what
 * hierarchy. Feature elements contained within a "stoptype of grouping may be ignored.
 * 
 * This element is flexible to allow for non-standard analyses.
 * Future versions of the MusicXML format may add elements
 * that can represent more standardized categories of analysis"
 * data, allowing for easier data sharing.
 */
export interface Grouping {
    features: Feature[];
    number_: number;
    groupingType: StartStopSingle;
    memberOf: string;
}

/**
 * The grouping element is used for musical analysis. When
 * the element type is "start" or "single", it usually contains
 * one or more feature elements. The number attribute is used
 * for distinguishing between overlapping and hierarchical
 * groupings. The member-of attribute allows for easy
 * distinguishing of what grouping elements are in what
 * hierarchy. Feature elements contained within a "stoptype of grouping may be ignored.
 * 
 * This element is flexible to allow for non-standard analyses.
 * Future versions of the MusicXML format may add elements
 * that can represent more standardized categories of analysis"
 * data, allowing for easier data sharing.
 */
export interface GroupingComplete {
    features: Feature[];
    number_: number;
    groupingType: StartStopSingle;
    memberOf: string;
}


export interface Feature {
    data: string;
    type: string;
}

export interface FeatureComplete {
    data: string;
    type: string;
}


/**
 * The print element contains general printing parameters,
 * including the layout elements defined in the layout.mod
 * file. The part-name-display and part-abbreviation-display
 * elements used in the score.mod file may also be used here
 * to change how a part name or abbreviation is displayed over
 * the course of a piece. They take effect when the current
 * measure or a succeeding measure starts a new system.
 * 
 * The new-system and new-page attributes indicate whether
 * to force a system or page break, or to force the current
 * music onto the same system or page as the preceding music.
 * Normally this is the first music data within a measure.
 * If used in multi-part music, they should be placed in the
 * same positions within each part, or the results are
 * undefined. The page-number attribute sets the number of a
 * new page; it is ignored if new-page is not "yes". Version
 * 2.0 adds a blank-page attribute. This is a positive integer
 * value that specifies the number of blank pages to insert
 * before the current measure. It is ignored if new-page is
 * not "yes". These blank pages have no music, but may have
 * text or images specified by the credit element. This is
 * used to allow a combination of pages that are all text,
 * or all text and images, together with pages of music.
 * 
 * Staff spacing between multiple staves is measured in
 * tenths of staff lines (e.g. 100 = 10 staff lines). This is
 * deprecated as of Version 1.1; the staff-layout element
 * should be used instead. If both are present, the
 * staff-layout values take priority.
 * 
 * Layout elements in a print statement only apply to the
 * current page, system, staff, or measure. Music that
 * follows continues to take the default values from the
 * layout included in the defaults element.
 */
export interface Print {
    measureNumbering: MeasureNumbering;
    partNameDisplay: PartNameDisplay;
    newSystem: boolean;
    newPage: boolean;
    blankPage: string;
    measureLayout: MeasureLayout;
    partAbbreviationDisplay: PartAbbreviationDisplay;
    pageLayout: PageLayout;
    systemLayout: SystemLayout;
    staffSpacing: number;
    staffLayouts: StaffLayout[];
    pageNumber: string;
}

/**
 * The print element contains general printing parameters,
 * including the layout elements defined in the layout.mod
 * file. The part-name-display and part-abbreviation-display
 * elements used in the score.mod file may also be used here
 * to change how a part name or abbreviation is displayed over
 * the course of a piece. They take effect when the current
 * measure or a succeeding measure starts a new system.
 * 
 * The new-system and new-page attributes indicate whether
 * to force a system or page break, or to force the current
 * music onto the same system or page as the preceding music.
 * Normally this is the first music data within a measure.
 * If used in multi-part music, they should be placed in the
 * same positions within each part, or the results are
 * undefined. The page-number attribute sets the number of a
 * new page; it is ignored if new-page is not "yes". Version
 * 2.0 adds a blank-page attribute. This is a positive integer
 * value that specifies the number of blank pages to insert
 * before the current measure. It is ignored if new-page is
 * not "yes". These blank pages have no music, but may have
 * text or images specified by the credit element. This is
 * used to allow a combination of pages that are all text,
 * or all text and images, together with pages of music.
 * 
 * Staff spacing between multiple staves is measured in
 * tenths of staff lines (e.g. 100 = 10 staff lines). This is
 * deprecated as of Version 1.1; the staff-layout element
 * should be used instead. If both are present, the
 * staff-layout values take priority.
 * 
 * Layout elements in a print statement only apply to the
 * current page, system, staff, or measure. Music that
 * follows continues to take the default values from the
 * layout included in the defaults element.
 */
export interface PrintComplete {
    measureNumbering: MeasureNumbering;
    partNameDisplay: PartNameDisplay;
    newSystem: boolean;
    newPage: boolean;
    blankPage: string;
    measureLayout: MeasureLayout;
    partAbbreviationDisplay: PartAbbreviationDisplay;
    pageLayout: PageLayout;
    systemLayout: SystemLayout;
    staffSpacing: number;
    staffLayouts: StaffLayout[];
    pageNumber: string;
}


/**
 * The measure-numbering element describes how measure
 * numbers are displayed on this part. Values may be none,
 * measure, or system. The number attribute from the measure
 * element is used for printing. Measures with an implicit
 * attribute set to "yes" never display a measure number,
 * regardless of the measure-numbering setting.
 */
export interface MeasureNumbering extends PrintStyleAlign {
    data: string;
}

/**
 * The measure-numbering element describes how measure
 * numbers are displayed on this part. Values may be none,
 * measure, or system. The number attribute from the measure
 * element is used for printing. Measures with an implicit
 * attribute set to "yes" never display a measure number,
 * regardless of the measure-numbering setting.
 */
export interface MeasureNumberingComplete extends PrintStyleAlignComplete {
    data: string;
}


/**
 * The sound element contains general playback parameters.
 * They can stand alone within a part/measure, or be a
 * component element within a direction.
 * 
 * Tempo is expressed in quarter notes per minute. If 0,
 * the sound-generating program should prompt the user at the
 * time of compiling a sound (MIDI) file.
 * 
 * Dynamics (or MIDI velocity) are expressed as a percentage
 * of the default forte value (90 for MIDI 1.0).
 * 
 * Dacapo indicates to go back to the beginning of the
 * movement. When used it always has the value "yes".
 * 
 * Segno and dalsegno are used for backwards jumps to a
 * segno sign; coda and tocoda are used for forward jumps
 * to a coda sign. If there are multiple jumps, the value
 * of these parameters can be used to name and distinguish
 * them. If segno or coda is used, the divisions attribute
 * can also be used to indicate the number of divisions
 * per quarter note. Otherwise sound and MIDI generating
 * programs may have to recompute this.
 * 
 * By default, a dalsegno or dacapo attribute indicates that
 * the jump should occur the first time through, while a
 * tocoda attribute indicates the jump should occur the second
 * time through. The time that jumps occur can be changed by
 * using the time-only attribute.
 * 
 * Forward-repeat is used when a forward repeat sign is
 * implied, and usually follows a bar line. When used it
 * always has the value of "yes".
 * 
 * The fine attribute follows the final note or rest in a
 * movement with a da capo or dal segno direction. If numeric,
 * the value represents the actual duration of the final note or
 * rest, which can be ambiguous in written notation and
 * different among parts and voices. The value may also be
 * "yes" to indicate no change to the final duration.
 * 
 * If the sound element applies only particular times through a
 * repeat, the time-only attribute indicates which times to apply
 * the sound element. The value is a comma-separated list of
 * positive integers arranged in ascending order, indicating
 * which times through the repeated section that the element
 * applies.
 * 
 * Pizzicato in a sound element effects all following notes.
 * Yes indicates pizzicato, no indicates arco.
 * 
 * The pan and elevation attributes are deprecated in
 * Version 2.0. The pan and elevation elements in
 * the midi-instrument element should be used instead.
 * The meaning of the pan and elevation attributes is
 * the same as for the pan and elevation elements. If
 * both are present, the mid-instrument elements take
 * priority.
 * 
 * The damper-pedal, soft-pedal, and sostenuto-pedal
 * attributes effect playback of the three common piano
 * pedals and their MIDI controller equivalents. The yes
 * value indicates the pedal is depressed; no indicates
 * the pedal is released. A numeric value from 0 to 100
 * may also be used for half pedaling. This value is the
 * percentage that the pedal is depressed. A value of 0 is
 * equivalent to no, and a value of 100 is equivalent to yes.
 * 
 * MIDI devices, MIDI instruments, and playback techniques are
 * changed using the midi-device, midi-instrument, and play
 * elements defined in the common.mod file. When there are
 * multiple instances of these elements, they should be grouped
 * together by instrument using the id attribute values.
 * 
 * The offset element is used to indicate that the sound takes
 * place offset from the current score position. If the sound
 * element is a child of a direction element, the sound offset
 * element overrides the direction offset element if both
 * elements are present. Note that the offset reflects the
 * intended musical position for the change in sound. It
 * should not be used to compensate for latency issues in
 * particular hardware configurations.
 */
export interface Sound extends TimeOnly {
    softPedal: boolean;
    midiInstrument: MidiInstrument;
    pan: string;
    tocoda: string;
    decapo: boolean;
    divisions: string;
    pizzicato: boolean;
    coda: string;
    segno: string;
    elevation: string;
    fine: string;
    damperPedal: boolean;
    dynamics: string;
    plays: Play[];
    offset: Offset;
    sostenutoPedal: boolean;
    dalsegno: string;
    midiDevice: MidiDevice;
    tempo: string;
    forwardRepeat: boolean;
}

/**
 * The sound element contains general playback parameters.
 * They can stand alone within a part/measure, or be a
 * component element within a direction.
 * 
 * Tempo is expressed in quarter notes per minute. If 0,
 * the sound-generating program should prompt the user at the
 * time of compiling a sound (MIDI) file.
 * 
 * Dynamics (or MIDI velocity) are expressed as a percentage
 * of the default forte value (90 for MIDI 1.0).
 * 
 * Dacapo indicates to go back to the beginning of the
 * movement. When used it always has the value "yes".
 * 
 * Segno and dalsegno are used for backwards jumps to a
 * segno sign; coda and tocoda are used for forward jumps
 * to a coda sign. If there are multiple jumps, the value
 * of these parameters can be used to name and distinguish
 * them. If segno or coda is used, the divisions attribute
 * can also be used to indicate the number of divisions
 * per quarter note. Otherwise sound and MIDI generating
 * programs may have to recompute this.
 * 
 * By default, a dalsegno or dacapo attribute indicates that
 * the jump should occur the first time through, while a
 * tocoda attribute indicates the jump should occur the second
 * time through. The time that jumps occur can be changed by
 * using the time-only attribute.
 * 
 * Forward-repeat is used when a forward repeat sign is
 * implied, and usually follows a bar line. When used it
 * always has the value of "yes".
 * 
 * The fine attribute follows the final note or rest in a
 * movement with a da capo or dal segno direction. If numeric,
 * the value represents the actual duration of the final note or
 * rest, which can be ambiguous in written notation and
 * different among parts and voices. The value may also be
 * "yes" to indicate no change to the final duration.
 * 
 * If the sound element applies only particular times through a
 * repeat, the time-only attribute indicates which times to apply
 * the sound element. The value is a comma-separated list of
 * positive integers arranged in ascending order, indicating
 * which times through the repeated section that the element
 * applies.
 * 
 * Pizzicato in a sound element effects all following notes.
 * Yes indicates pizzicato, no indicates arco.
 * 
 * The pan and elevation attributes are deprecated in
 * Version 2.0. The pan and elevation elements in
 * the midi-instrument element should be used instead.
 * The meaning of the pan and elevation attributes is
 * the same as for the pan and elevation elements. If
 * both are present, the mid-instrument elements take
 * priority.
 * 
 * The damper-pedal, soft-pedal, and sostenuto-pedal
 * attributes effect playback of the three common piano
 * pedals and their MIDI controller equivalents. The yes
 * value indicates the pedal is depressed; no indicates
 * the pedal is released. A numeric value from 0 to 100
 * may also be used for half pedaling. This value is the
 * percentage that the pedal is depressed. A value of 0 is
 * equivalent to no, and a value of 100 is equivalent to yes.
 * 
 * MIDI devices, MIDI instruments, and playback techniques are
 * changed using the midi-device, midi-instrument, and play
 * elements defined in the common.mod file. When there are
 * multiple instances of these elements, they should be grouped
 * together by instrument using the id attribute values.
 * 
 * The offset element is used to indicate that the sound takes
 * place offset from the current score position. If the sound
 * element is a child of a direction element, the sound offset
 * element overrides the direction offset element if both
 * elements are present. Note that the offset reflects the
 * intended musical position for the change in sound. It
 * should not be used to compensate for latency issues in
 * particular hardware configurations.
 */
export interface SoundComplete extends TimeOnlyComplete {
    softPedal: boolean;
    midiInstrument: MidiInstrument;
    pan: string;
    tocoda: string;
    decapo: boolean;
    divisions: string;
    pizzicato: boolean;
    coda: string;
    segno: string;
    elevation: string;
    fine: string;
    damperPedal: boolean;
    dynamics: string;
    plays: Play[];
    offset: Offset;
    sostenutoPedal: boolean;
    dalsegno: string;
    midiDevice: MidiDevice;
    tempo: string;
    forwardRepeat: boolean;
}


/**
 * Works and movements are optionally identified by number
 * and title. The work element also may indicate a link
 * to the opus document that composes multiple movements
 * into a collection.
 */
export interface Work {
    workNumber: string;
    workTitle: string;
    opus: Opus;
}

/**
 * Works and movements are optionally identified by number
 * and title. The work element also may indicate a link
 * to the opus document that composes multiple movements
 * into a collection.
 */
export interface WorkComplete {
    workNumber: string;
    workTitle: string;
    opus: Opus;
}


/**
 * Ripieno MusicXML does not support this field.
 */
export interface Opus {
}

/**
 * Ripieno MusicXML does not support this field.
 */
export interface OpusComplete {
}


/**
 * Collect score-wide defaults. This includes scaling
 * and layout, defined in layout.mod, and default values
 * for the music font, word font, lyric font, and
 * lyric language. The number and name attributes in
 * lyric-font and lyric-language elements are typically
 * used when lyrics are provided in multiple languages.
 * If the number and name attributes are omitted, the
 * lyric-font and lyric-language values apply to all
 * numbers and names.
 */
export interface Defaults {
    wordFont: WordFont;
    lyricLanguages: LyricLanguage[];
    lyricFonts: LyricFont[];
    pageLayout: PageLayout;
    systemLayout: SystemLayout;
    appearance: Appearance;
    scaling: Scaling;
    staffLayouts: StaffLayout[];
    musicFont: MusicFont;
}

/**
 * Collect score-wide defaults. This includes scaling
 * and layout, defined in layout.mod, and default values
 * for the music font, word font, lyric font, and
 * lyric language. The number and name attributes in
 * lyric-font and lyric-language elements are typically
 * used when lyrics are provided in multiple languages.
 * If the number and name attributes are omitted, the
 * lyric-font and lyric-language values apply to all
 * numbers and names.
 */
export interface DefaultsComplete {
    wordFont: WordFont;
    lyricLanguages: LyricLanguage[];
    lyricFonts: LyricFont[];
    pageLayout: PageLayout;
    systemLayout: SystemLayout;
    appearance: Appearance;
    scaling: Scaling;
    staffLayouts: StaffLayout[];
    musicFont: MusicFont;
}


export interface MusicFont extends Font {
}

export interface MusicFontComplete extends FontComplete {
}


export interface WordFont extends Font {
}

export interface WordFontComplete extends FontComplete {
}


export interface LyricFont extends Font {
    number_: number;
    name: string;
}

export interface LyricFontComplete extends FontComplete {
    number_: number;
    name: string;
}


export interface LyricLanguage {
    number_: number;
    name: string;
}

export interface LyricLanguageComplete {
    number_: number;
    name: string;
}


/**
 *     Credit elements refer to the title, composer, arranger,
 * lyricist, copyright, dedication, and other text that usually
 * appears on the first page of a score. The credit-words
 * and credit-image elements are similar to the words and
 * image elements for directions. However, since the
 * credit is not part of a measure, the default-x and
 * default-y attributes adjust the origin relative to the
 * bottom left-hand corner of the first page. The
 * enclosure for credit-words is none by default.
 * 
 * By default, a series of credit-words elements within a
 * single credit element follow one another in sequence
 * visually. Non-positional formatting attributes are carried
 * over from the previous element by default.
 * 
 * The page attribute for the credit element, new in Version
 * 2.0, specifies the page number where the credit should
 * appear. This is an integer value that starts with 1 for the
 * first page. Its value is 1 by default. Since credits occur
 * before the music, these page numbers do not refer to the
 * page numbering specified by the print element's page-number
 * attribute.
 */
export interface Credit {
    creditTypes: string[];
    creditWords: CreditWords[];
    creditImage: CreditImage;
    page: number;
}

/**
 *     Credit elements refer to the title, composer, arranger,
 * lyricist, copyright, dedication, and other text that usually
 * appears on the first page of a score. The credit-words
 * and credit-image elements are similar to the words and
 * image elements for directions. However, since the
 * credit is not part of a measure, the default-x and
 * default-y attributes adjust the origin relative to the
 * bottom left-hand corner of the first page. The
 * enclosure for credit-words is none by default.
 * 
 * By default, a series of credit-words elements within a
 * single credit element follow one another in sequence
 * visually. Non-positional formatting attributes are carried
 * over from the previous element by default.
 * 
 * The page attribute for the credit element, new in Version
 * 2.0, specifies the page number where the credit should
 * appear. This is an integer value that starts with 1 for the
 * first page. Its value is 1 by default. Since credits occur
 * before the music, these page numbers do not refer to the
 * page numbering specified by the print element's page-number
 * attribute.
 */
export interface CreditComplete {
    creditTypes: string[];
    creditWords: CreditWords[];
    creditImage: CreditImage;
    page: number;
}


export interface CreditWords extends TextFormatting {
    words: string;
}

export interface CreditWordsComplete extends TextFormattingComplete {
    words: string;
}


export interface CreditImage extends Position, Halign, ValignImage {
    type: string;
    source: string;
}

export interface CreditImageComplete extends PositionComplete, HalignComplete, ValignImageComplete {
    type: string;
    source: string;
}


/**
 * The part-list identifies the different musical parts in
 * this movement. Each part has an ID that is used later
 * within the musical data. Since parts may be encoded
 * separately and combined later, identification elements
 * are present at both the score and score-part levels.
 * There must be at least one score-part, combined as
 * desired with part-group elements that indicate braces
 * and brackets. Parts are ordered from top to bottom in
 * a score based on the order in which they appear in the
 * part-list.
 * 
 * Each MusicXML part corresponds to a track in a Standard
 * MIDI Format 1 file. The score-instrument elements are
 * used when there are multiple instruments per track.
 * The midi-device element is used to make a MIDI device
 * or port assignment for the given track or specific MIDI
 * instruments. Initial midi-instrument assignments may be
 * made here as well.
 */
export interface PartList {
    scoreParts: ScorePart[];
    partGroups: PartGroup[];
}

/**
 * The part-list identifies the different musical parts in
 * this movement. Each part has an ID that is used later
 * within the musical data. Since parts may be encoded
 * separately and combined later, identification elements
 * are present at both the score and score-part levels.
 * There must be at least one score-part, combined as
 * desired with part-group elements that indicate braces
 * and brackets. Parts are ordered from top to bottom in
 * a score based on the order in which they appear in the
 * part-list.
 * 
 * Each MusicXML part corresponds to a track in a Standard
 * MIDI Format 1 file. The score-instrument elements are
 * used when there are multiple instruments per track.
 * The midi-device element is used to make a MIDI device
 * or port assignment for the given track or specific MIDI
 * instruments. Initial midi-instrument assignments may be
 * made here as well.
 */
export interface PartListComplete {
    scoreParts: ScorePart[];
    partGroups: PartGroup[];
}


export interface ScorePart {
    identification: Identification;
    partNameDisplay: PartNameDisplay;
    scoreInstruments: ScoreInstrument[];
    midiDevices: MidiDevice[];
    partName: PartName;
    partAbbreviationDisplay: PartAbbreviationDisplay;
    partAbbreviation: PartAbbreviation;
    groups: string[];
    midiInstruments: MidiInstrument[];
    id: string;
}

export interface ScorePartComplete {
    identification: Identification;
    partNameDisplay: PartNameDisplay;
    scoreInstruments: ScoreInstrument[];
    midiDevices: MidiDevice[];
    partName: PartName;
    partAbbreviationDisplay: PartAbbreviationDisplay;
    partAbbreviation: PartAbbreviation;
    groups: string[];
    midiInstruments: MidiInstrument[];
    id: string;
}


/**
 *     The part-name indicates the full name of the musical part.
 * The part-abbreviation indicates the abbreviated version of
 * the name of the musical part. The part-name will often
 * precede the first system, while the part-abbreviation will
 * precede the other systems. The formatting attributes for
 * these elements are deprecated in Version 2.0 in favor of
 * the new part-name-display and part-abbreviation-display
 * elements. These are defined in the common.mod file as they
 * are used in both the part-list and print elements. They
 * provide more complete formatting control for how part names
 * and abbreviations appear in a score.
 */
export interface PartName extends PrintStyle, PrintObject, Justify {
    partName: string;
}

/**
 *     The part-name indicates the full name of the musical part.
 * The part-abbreviation indicates the abbreviated version of
 * the name of the musical part. The part-name will often
 * precede the first system, while the part-abbreviation will
 * precede the other systems. The formatting attributes for
 * these elements are deprecated in Version 2.0 in favor of
 * the new part-name-display and part-abbreviation-display
 * elements. These are defined in the common.mod file as they
 * are used in both the part-list and print elements. They
 * provide more complete formatting control for how part names
 * and abbreviations appear in a score.
 */
export interface PartNameComplete extends PrintStyleComplete, PrintObjectComplete, JustifyComplete {
    partName: string;
}


/**
 *     The part-name indicates the full name of the musical part.
 * The part-abbreviation indicates the abbreviated version of
 * the name of the musical part. The part-name will often
 * precede the first system, while the part-abbreviation will
 * precede the other systems. The formatting attributes for
 * these elements are deprecated in Version 2.0 in favor of
 * the new part-name-display and part-abbreviation-display
 * elements. These are defined in the common.mod file as they
 * are used in both the part-list and print elements. They
 * provide more complete formatting control for how part names
 * and abbreviations appear in a score.
 */
export interface PartAbbreviation extends PrintStyle, PrintObject, Justify {
    abbreviation: string;
}

/**
 *     The part-name indicates the full name of the musical part.
 * The part-abbreviation indicates the abbreviated version of
 * the name of the musical part. The part-name will often
 * precede the first system, while the part-abbreviation will
 * precede the other systems. The formatting attributes for
 * these elements are deprecated in Version 2.0 in favor of
 * the new part-name-display and part-abbreviation-display
 * elements. These are defined in the common.mod file as they
 * are used in both the part-list and print elements. They
 * provide more complete formatting control for how part names
 * and abbreviations appear in a score.
 */
export interface PartAbbreviationComplete extends PrintStyleComplete, PrintObjectComplete, JustifyComplete {
    abbreviation: string;
}


/**
 * The part-group element indicates groupings of parts in the
 * score, usually indicated by braces and brackets. Braces
 * that are used for multi-staff parts should be defined in
 * the attributes element for that part.
 * 
 * A part-group element is not needed for a single multi-staff
 * part. By default, multi-staff parts include a brace symbol
 * and (if appropriate given the bar-style) common barlines.
 * The symbol formatting for a multi-staff part can be more
 * fully specified using the part-symbol element.
 */
export interface PartGroup extends Editorial {
    groupNameDisplay: GroupNameDisplay;
    groupSymbol: GroupSymbol;
    groupName: GroupName;
    groupAbbreviationDisplay: GroupAbbreviationDisplay;
    groupBarline: GroupBarline;
    number_: number;
    groupAbbreviation: GroupAbbreviation;
    type: StartStop;
    groupTime: GroupTime;
}

/**
 * The part-group element indicates groupings of parts in the
 * score, usually indicated by braces and brackets. Braces
 * that are used for multi-staff parts should be defined in
 * the attributes element for that part.
 * 
 * A part-group element is not needed for a single multi-staff
 * part. By default, multi-staff parts include a brace symbol
 * and (if appropriate given the bar-style) common barlines.
 * The symbol formatting for a multi-staff part can be more
 * fully specified using the part-symbol element.
 */
export interface PartGroupComplete extends EditorialComplete {
    groupNameDisplay: GroupNameDisplay;
    groupSymbol: GroupSymbol;
    groupName: GroupName;
    groupAbbreviationDisplay: GroupAbbreviationDisplay;
    groupBarline: GroupBarline;
    number_: number;
    groupAbbreviation: GroupAbbreviation;
    type: StartStop;
    groupTime: GroupTime;
}


/**
 * As with parts, groups can have a name and abbreviation.
 * Formatting attributes for group-name and group-abbreviation
 * are deprecated in Version 2.0 in favor of the new
 * group-name-display and group-abbreviation-display elements.
 */
export interface GroupName extends PrintStyle, Justify {
    name: string;
}

/**
 * As with parts, groups can have a name and abbreviation.
 * Formatting attributes for group-name and group-abbreviation
 * are deprecated in Version 2.0 in favor of the new
 * group-name-display and group-abbreviation-display elements.
 */
export interface GroupNameComplete extends PrintStyleComplete, JustifyComplete {
    name: string;
}


/**
 * Formatting specified in the group-name-display and
 * group-abbreviation-display elements overrides formatting
 * specified in the group-name and group-abbreviation
 * elements, respectively.
 */
export interface GroupNameDisplay extends PrintObject {
    displayTexts: DisplayText[];
    accidentalTexts: AccidentalText[];
}

/**
 * Formatting specified in the group-name-display and
 * group-abbreviation-display elements overrides formatting
 * specified in the group-name and group-abbreviation
 * elements, respectively.
 */
export interface GroupNameDisplayComplete extends PrintObjectComplete {
    displayTexts: DisplayText[];
    accidentalTexts: AccidentalText[];
}


/**
 * As with parts, groups can have a name and abbreviation.
 * Formatting attributes for group-name and group-abbreviation
 * are deprecated in Version 2.0 in favor of the new
 * group-name-display and group-abbreviation-display elements.
 */
export interface GroupAbbreviation extends PrintStyle, Justify {
    text: string;
}

/**
 * As with parts, groups can have a name and abbreviation.
 * Formatting attributes for group-name and group-abbreviation
 * are deprecated in Version 2.0 in favor of the new
 * group-name-display and group-abbreviation-display elements.
 */
export interface GroupAbbreviationComplete extends PrintStyleComplete, JustifyComplete {
    text: string;
}


/**
 * Formatting specified in the group-name-display and
 * group-abbreviation-display elements overrides formatting
 * specified in the group-name and group-abbreviation
 * elements, respectively.
 */
export interface GroupAbbreviationDisplay extends PrintObject {
    displayTexts: DisplayText[];
    accidentalTexts: AccidentalText[];
}

/**
 * Formatting specified in the group-name-display and
 * group-abbreviation-display elements overrides formatting
 * specified in the group-name and group-abbreviation
 * elements, respectively.
 */
export interface GroupAbbreviationDisplayComplete extends PrintObjectComplete {
    displayTexts: DisplayText[];
    accidentalTexts: AccidentalText[];
}


/**
 * The group-symbol element indicates how the symbol for
 * a group is indicated in the score. Values include none,
 * brace, line, bracket, and square; the default is none.
 */
export interface GroupSymbol extends Position, Color {
    data: PartSymbolType;
}

/**
 * The group-symbol element indicates how the symbol for
 * a group is indicated in the score. Values include none,
 * brace, line, bracket, and square; the default is none.
 */
export interface GroupSymbolComplete extends PositionComplete, ColorComplete {
    data: PartSymbolType;
}


/**
 * The group-barline element indicates if the group should
 * have common barlines. Values can be yes, no, or
 * Mensurstrich. 
 */
export interface GroupBarline extends Color {
    data: string;
}

/**
 * The group-barline element indicates if the group should
 * have common barlines. Values can be yes, no, or
 * Mensurstrich. 
 */
export interface GroupBarlineComplete extends ColorComplete {
    data: string;
}


/**
 * The group-time element indicates that the
 * displayed time signatures should stretch across all parts
 * and staves in the group.
 */
export interface GroupTime {
}

/**
 * The group-time element indicates that the
 * displayed time signatures should stretch across all parts
 * and staves in the group.
 */
export interface GroupTimeComplete {
}


/**
 *     The score-instrument element allows for multiple
 * instruments per score-part. As with the score-part
 * element, each score-instrument has a required ID
 * attribute, a name, and an optional abbreviation. The
 * instrument-name and instrument-abbreviation are
 * typically used within a software application, rather
 * than appearing on the printed page of a score.
 * 
 * A score-instrument element is also required if the
 * score specifies MIDI 1.0 channels, banks, or programs.
 * An initial midi-instrument assignment can also
 * be made here.
 * 
 * The instrument-sound and virtual-instrument elements
 * are new as of Version 3.0. The instrument-sound element
 * describes the default timbre of the score-instrument. This
 * description is independent of a particular virtual or
 * MIDI instrument specification and allows playback to be
 * shared more easily between applications and libraries.
 * The virtual-instrument element defines a specific virtual
 * instrument used for an instrument sound. The
 * virtual-library element indicates the virtual instrument
 * library name, and the virtual-name element indicates the
 * library-specific name for the virtual instrument.
 * 
 * The solo and ensemble elements are new as of Version
 * 2.0. The solo element is present if performance is
 * intended by a solo instrument. The ensemble element
 * is present if performance is intended by an ensemble
 * such as an orchestral section. The text of the
 * ensemble element contains the size of the section,
 * or is empty if the ensemble size is not specified.
 * 
 * The midi-instrument element is defined in the common.mod
 * file, as it can be used within both the score-part and
 * sound elements.
 */
export interface ScoreInstrument {
    instrumentName: string;
    instrumentSound: string;
    ensemble: string;
    virtualInstrument: VirtualInstrument;
    instrumentAbbreviation: string;
    solo: Solo;
    id: string;
}

/**
 *     The score-instrument element allows for multiple
 * instruments per score-part. As with the score-part
 * element, each score-instrument has a required ID
 * attribute, a name, and an optional abbreviation. The
 * instrument-name and instrument-abbreviation are
 * typically used within a software application, rather
 * than appearing on the printed page of a score.
 * 
 * A score-instrument element is also required if the
 * score specifies MIDI 1.0 channels, banks, or programs.
 * An initial midi-instrument assignment can also
 * be made here.
 * 
 * The instrument-sound and virtual-instrument elements
 * are new as of Version 3.0. The instrument-sound element
 * describes the default timbre of the score-instrument. This
 * description is independent of a particular virtual or
 * MIDI instrument specification and allows playback to be
 * shared more easily between applications and libraries.
 * The virtual-instrument element defines a specific virtual
 * instrument used for an instrument sound. The
 * virtual-library element indicates the virtual instrument
 * library name, and the virtual-name element indicates the
 * library-specific name for the virtual instrument.
 * 
 * The solo and ensemble elements are new as of Version
 * 2.0. The solo element is present if performance is
 * intended by a solo instrument. The ensemble element
 * is present if performance is intended by an ensemble
 * such as an orchestral section. The text of the
 * ensemble element contains the size of the section,
 * or is empty if the ensemble size is not specified.
 * 
 * The midi-instrument element is defined in the common.mod
 * file, as it can be used within both the score-part and
 * sound elements.
 */
export interface ScoreInstrumentComplete {
    instrumentName: string;
    instrumentSound: string;
    ensemble: string;
    virtualInstrument: VirtualInstrument;
    instrumentAbbreviation: string;
    solo: Solo;
    id: string;
}


export interface Solo {
}

export interface SoloComplete {
}


export interface VirtualInstrument {
    virtualLibrary: string;
    virtualName: string;
}

export interface VirtualInstrumentComplete {
    virtualLibrary: string;
    virtualName: string;
}


/**
 * The score-header entity contains basic score metadata
 * about the work and movement, score-wide defaults for
 * layout and fonts, credits that appear on the first page,
 * and the part list.
 */
export interface ScoreHeader {
    movementTitle: string;
    identification: Identification;
    defaults: Defaults;
    work: Work;
    credits: Credit[];
    partList: PartList;
    movementNumber: string;
}

/**
 * The score-header entity contains basic score metadata
 * about the work and movement, score-wide defaults for
 * layout and fonts, credits that appear on the first page,
 * and the part list.
 */
export interface ScoreHeaderComplete {
    movementTitle: string;
    identification: Identification;
    defaults: Defaults;
    work: Work;
    credits: Credit[];
    partList: PartList;
    movementNumber: string;
}


/**
 * The score is the root element for the DTD. It includes
 * the score-header entity, followed by a series of
 * measures with parts inside.
 * 
 * See also score-partwise.
 */
export interface ScoreTimewise extends DocumentAttributes, ScoreHeader {
    measures: Measure[];
}

/**
 * The score is the root element for the DTD. It includes
 * the score-header entity, followed by a series of
 * measures with parts inside.
 * 
 * See also score-partwise.
 */
export interface ScoreTimewiseComplete extends DocumentAttributesComplete, ScoreHeaderComplete {
    measures: Measure[];
}


/**
 * The basic musical data that is associated with a measure.
 */
export interface Part {
}

/**
 * The basic musical data that is associated with a measure.
 */
export interface PartComplete {
}


/**
 * Represents a measure.
 */
export interface Measure {
    number_: string;
    implicit: boolean;
    width: number;
    parts: {[key: string]: any[]};
    nonControlling: boolean;
}

/**
 * Represents a measure.
 */
export interface MeasureComplete {
    number_: string;
    implicit: boolean;
    width: number;
    parts: {[key: string]: any[]};
    nonControlling: boolean;
}

