import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-kermes-header.html';
import body from '@/components/exact/en-sa-stores-kermes-body.html';
import footer from '@/components/exact/en-sa-stores-kermes-footer.html';
import inline from '@/components/exact/en-sa-stores-kermes.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
